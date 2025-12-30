---
title: "Windows Registry Forensic Analysis"
date: "2025-01-14"
tags: ["forensics", "windows", "registry"]
category: "Digital Forensics"
summary: "Windows Registry의 구조, 데이터 수집 방법(FTK Imager), 사용자 행위 분석 및 악성코드 흔적 탐지 기법을 총정리한다."
---

Windows 시스템 분석이나 침해 사고 대응을 할 때 Registry는 항상 확인하는 아티팩트 중 하나이다. Registry에는 시스템의 설정뿐만 아니라 사용자의 모든 흔적이 남아 있기 때문인데, 악성코드도 Registry를 조작하여 자동 실행, 프로세스 은폐, 시스템 설정 변경 등의 행위를 수행할 수 있기 때문에 포렌식 분석에서는 Registry를 통해 다양한 정보를 수집할 수 있다.

이번 글에서는 Windows Registry의 기본 구조부터 포렌식 관점에서의 데이터 수집 방법, 그리고 사용자 활동 및 악성코드 탐지 시 확인해야 할 주요 Registry 경로까지 다룬다.


## 1. Registry Overview

### 1.1 Registry란?

Registry는 Windows 운영체제에서 **운영체제, 하드웨어, 소프트웨어, 사용자 정보 및 시스템 구성 요소**를 관리하기 위해 사용하는 계층형 데이터베이스이다.

* **중앙 집중 관리**: 하나의 파일 시스템처럼 모든 설정을 체계적으로 저장한다.
* **참조 공간**: Windows에서 행해지는 대부분의 작업은 이 공간의 값을 참조하거나 기록한다.

> 초창기 Windows는 `.ini` 파일로 설정을 개별 관리했으나, 시스템이 복잡해지면서 관리가 어려워지고 부하가 발생했다. 이를 해결하기 위해 중앙 집중형 데이터베이스인 Registry가 도입되었다.

### 1.2 Registry 편집 도구

Registry는 Hive 파일이라 불리는 일종의 바이너리 형태로 저장되기 때문에 열람을 위해 별도의 전용 도구가 필요하다.

| 도구 | 설명 |
| :--- | :--- |
| **regedit.exe** | Windows 표준 편집기. 검색 및 값 수정 가능 (관리자 권한 필요) |
| **regedt32.exe** | 과거 NT 3.x 시절의 도구 (현재는 regedit.exe로 통합됨) |
| **gpedit.msc** | 로컬 그룹 정책 편집기 (Pro/Enterprise 버전 이상 기본 탑재) |


## 2. Registry Structure

Registry는 크게 **Key**와 **Value**, 그리고 이를 파일로 저장한 **Hive 파일**로 구성된다.

![Registry 구조](/images/registry_1.png)

### 2.1 Key와 Value

* **Key**: 폴더와 유사한 개념으로, 계층적 트리 구조를 이룬다. 하위 키(Subkey)를 가질 수 있다.
* **Value**: 실제 데이터가 저장되는 곳이다. 이름, 데이터 타입, 데이터 값으로 구성된다.

![키 구조](/images/registry_2.png)

### 2.2 Root Key와 주요 Hive

시스템 부팅 시 커널은 Hive 파일을 읽어 메모리에 **5개의 루트 키**를 생성한다.

#### 1) HKEY_CLASSES_ROOT (HKCR)
* 파일 확장자 연결 정보, OLE 객체 정보 저장
* 예: `.txt` 파일을 더블 클릭했을 때 메모장이 열리도록 설정

#### 2) HKEY_USERS (HKU)
* 시스템에 있는 모든 사용자의 프로파일 정보 저장
* 개별 사용자의 설정(`NTUSER.DAT`)이 이곳에 로드된다.

![HKU 구조](/images/registry_3.png)

| HKU 하위키 | 실제 Hive 파일 위치 |
| :--- | :--- |
| HKU\<LocalService> | `%SystemRoot%\ServiceProfiles\LocalService\NTUSER.DAT` |
| HKU\<User SID> | `%UserProfile%\NTUSER.DAT` |
| HKU\.DEFAULT | `%SystemRoot%\System32\Config\DEFAULT` |

#### 3) HKEY_CURRENT_USER (HKCU)
* **현재 로그인한 사용자**의 설정 정보
* 실제로는 `HKEY_USERS`의 특정 SID 키를 링크(Link)한 것이다.

#### 4) HKEY_LOCAL_MACHINE (HKLM)
* 시스템의 하드웨어, 소프트웨어, 보안 설정 등 **모든 사용자에게 공통 적용**되는 설정이다.

![HKLM 구조](/images/registry_4.png)

| 하위 키 | 설명 |
| :--- | :--- |
| **SAM** | 로컬 계정 및 그룹 정보 (해시된 패스워드 등) |
| **SECURITY** | 보안 정책 및 권한 정보 |
| **SOFTWARE** | 설치된 소프트웨어 정보 |
| **SYSTEM** | 시스템 부팅 및 드라이버 설정 정보 |

#### 5) HKEY_CURRENT_CONFIG (HKCC)
* 현재 실행 중인 하드웨어 프로파일 정보 (부팅 시 동적 생성)

### 2.3 Hive(Hive) 파일 위치

분석가가 실제로 수집해야 할 파일들이다.

| Hive 파일 | 위치 | 설명 |
| :--- | :--- | :--- |
| **SAM, SECURITY, SOFTWARE, SYSTEM** | `C:\Windows\System32\config\` | 시스템 전역 설정 |
| **NTUSER.DAT** | `C:\Users\[계정명]\` | 개별 사용자 설정 |
| **UsrClass.dat** | `C:\Users\[계정명]\AppData\Local\Microsoft\Windows\` | 사용자별 클래스 등록 정보 |


## 3. Registry Acquisition

### 3.1 수집 시 주의사항
Registry 파일은 운영체제가 구동 중일 때 **Lock(잠금)** 상태이므로 일반적인 복사 명령으로는 수집할 수 없다. 또한, 무결성을 위해 원본을 훼손하지 않아야 한다.

### 3.2 FTK Imager를 활용한 수집 절차
가장 대중적인 도구인 **FTK Imager**를 활용한 수집 방법이다.

1.  FTK Imager 실행 후 **File > ㅎAdd Evidence Item** 선택
2.  **Logical Drive** 선택 후 C 드라이브 로드
3.  아래 경로의 핵심 Hive 파일들을 선택하여 **Export File** (추출):
    * `\Windows\System32\config\` 폴더 내: **SAM, SECURITY, SOFTWARE, SYSTEM, DEFAULT**
    * `\Users\[UserName]\` 폴더 내: **NTUSER.DAT**
    * `\Users\[UserName]\AppData\Local\Microsoft\Windows\` 폴더 내: **UsrClass.dat**
4.  **중요**: 각 Hive 파일과 짝을 이루는 `.LOG1`, `.LOG2` 파일도 반드시 함께 수집해야 한다.

### 3.3 트랜잭션 로그 병합 (Replaying Logs)
활성 상태의 시스템에서 수집한 Registry는 `Dirty` 상태(메모리의 내용이 디스크에 완전히 기록되지 않음)일 수 있다.

**RLA(Registry Log Allocator)** 도구를 사용하여 로그 파일의 데이터를 Hive 파일에 병합해야 온전한 분석이 가능하다.

```bash
rla.exe -d [수집된 폴더] -o [결과 폴더]
```

**RLA 도구를 사용하는 이유**: 활성 상태의 Registry를 수집하게 되면, 사용 중이던 Registry가 정리되지 않은 상태(`dirty` 상태)로 시스템에 복사된다. 이를 정리하기 위해 RLA를 사용한다.

### 3.4 Hive 파일 구조

Hive 파일은 크게 두 가지 영역으로 구성된다:

1. **Base Block**: 파일 메타데이터 및 버전 정보 포함
2. **Hive Bin (hbin)**: Registry 키, 값, 데이터 저장

### 3.5 Hive 파일 분석 도구

수집된 Hive 파일은 `RegRipper`를 이용해 분석할 수 있다:

```bash
rip.pl -r SYSTEM -p all
```

RegRipper는 Hive 파일에서 특정 포렌식 아티팩트를 자동 추출하여 분석하는 데 유용하다.


## 4. System & User Activity Analysis

### 4.1 시스템 기본 정보

시스템의 기본적인 구성 정보를 확인할 수 있는 Registry 경로이다. 활성 시스템의 경우 `systeminfo` 명령으로도 일부 정보를 확인할 수 있다.

| 분석 항목 | Registry 경로 | 확인 가능한 정보 |
|-----------|---------------|------------------|
| OS 버전 | `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion` | 제품명, 빌드 번호, 설치 날짜 |
| 컴퓨터 이름 | `HKLM\SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName` | 호스트명 |
| 네트워크 이름 | `HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters` | 도메인, DNS 설정 |
| 사용자 환경변수 | `HKCU\Environment` | PATH, TEMP 등 사용자 설정 |
| 시스템 환경변수 | `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment` | 시스템 전역 환경변수 |

#### 설치된 프로그램 목록

| Registry 경로 | 설명 |
|---------------|------|
| `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths` | 실행 파일 경로 매핑 |
| `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall` | 설치된 프로그램 (버전, 설치 폴더, 설치 시간) |
| `HKLM\SOFTWARE\Classes\Installer\Products` | MSI 패키지로 설치된 프로그램 |

### 4.2 사용자 계정 정보

#### 사용자 프로필 목록

`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` 하위에 각 사용자의 SID별 프로필 정보가 저장된다.

#### SID (Security Identifier)

SID는 Windows에서 사용자와 그룹을 고유하게 식별하는 값이다.

| SID | 계정 | 설명 |
|-----|------|------|
| S-1-5-18 | SYSTEM | 운영체제 자체 |
| S-1-5-19 | LocalService | 제한된 권한의 로컬 서비스 |
| S-1-5-20 | NetworkService | 네트워크 인증이 필요한 서비스 |
| S-1-5-21-...-500 | Administrator | 기본 관리자 계정 |
| S-1-5-21-...-1001~ | 일반 사용자 | 생성 순서대로 RID 증가 |

#### 마지막 로그인 사용자

| Registry 경로 | 값 | 설명 |
|---------------|-----|------|
| `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon` | `LastUsedUsername` | 마지막 로그인 계정명 |
| | `DefaultUserName` | 자동 로그인 설정된 계정 |

### 4.3 프로그램 실행 흔적

사용자가 실행한 프로그램과 접근한 파일의 흔적을 추적할 수 있다.

#### UserAssist

`HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist`

Windows 탐색기를 통해 실행된 프로그램 기록이 ROT-13으로 인코딩되어 저장된다.

| GUID | 저장 내용 |
|------|-----------|
| `{CEBFF5CD-ACE2-4F4F-9178-9926F41749EA}` | 실행파일(.exe) 실행 기록 |
| `{F4E57C4B-2036-45F0-A9AB-443BCFE33D9F}` | 바로가기(.lnk) 실행 기록 |

각 항목에서 실행 횟수, 마지막 실행 시간을 확인할 수 있다.

#### 최근 문서 및 파일 접근 기록

| Registry 경로 | 설명 |
|---------------|------|
| `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs` | 최근 열어본 파일 목록 (확장자별 분류) |
| `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU` | 열기/저장 대화상자에서 접근한 파일 |
| `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\WordWheelQuery` | 탐색기 검색어 기록 |
| `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU` | 실행(Win+R) 대화상자 입력 기록 |

### 4.4 네트워크 연결 정보

#### 네트워크 인터페이스 및 IP 설정

| Registry 경로 | 확인 가능한 정보 |
|---------------|------------------|
| `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards` | 설치된 네트워크 어댑터 목록 |
| `HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces` | 각 인터페이스의 IP, Gateway, DNS 설정 |
| `HKLM\SYSTEM\ControlSet001\Control\Class\{4d36e972-...}` | MAC 주소 (NetworkAddress 값) |

#### 네트워크 연결 이력

| Registry 경로 | 확인 가능한 정보 |
|---------------|------------------|
| `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Profiles` | 연결했던 네트워크 프로필 (이름, 유형, 연결 시간) |
| `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Unmanaged` | 네트워크 식별 정보 (Gateway MAC 등) |

MAC 주소는 IP에 비해 변경이 어려워 분석 대상 시스템을 특정하는 데 유용하다.

### 4.5 USB 및 외부 저장장치

USB 장치 연결 이력은 데이터 유출 조사에서 중요한 증거가 된다.

#### 연결된 USB 장치

| Registry 경로 | 확인 가능한 정보 |
|---------------|------------------|
| `HKLM\SYSTEM\CurrentControlSet\Enum\USB` | VID(제조사), PID(제품) 식별자 |
| `HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR` | USB 저장장치 (제조사, 제품명, 시리얼) |
| `HKLM\SOFTWARE\Microsoft\Windows Portable Devices\Devices` | 마운트된 볼륨 이름 (FriendlyName) |

#### USB 연결 시간 확인

Registry 외에도 `C:\Windows\INF\setupapi.dev.log` 파일에서 장치가 처음 연결된 시간을 확인할 수 있다.


## 5. Malware Detection

### 5.1 자동 실행 (Persistence)

악성코드는 시스템 재부팅 후에도 실행을 유지하기 위해 자동 실행 키를 등록한다.

#### Run / RunOnce 키

가장 흔하게 악용되는 자동 실행 위치이다.

| Registry 경로 | 실행 시점 |
|---------------|-----------|
| `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run` | 해당 사용자 로그인 시 |
| `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run` | 모든 사용자 로그인 시 |
| `HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce` | 다음 로그인 시 1회 실행 후 삭제 |
| `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce` | 다음 부팅 시 1회 실행 후 삭제 |

#### 기타 자동 실행 위치

| Registry 경로 | 설명 |
|---------------|------|
| `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\BootExecute` | 부팅 초기 단계 실행 (Native 애플리케이션) |
| `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunServices` | 서비스 형태로 백그라운드 실행 |
| `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders\Common Startup` | 시작 프로그램 폴더 경로 |
| `HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders\Startup` | 사용자별 시작 프로그램 폴더 |

#### Windows 서비스

`HKLM\SYSTEM\CurrentControlSet\Services\[서비스명]`

- `ImagePath`: 실행 파일 경로 → 의심스러운 경로인지 확인
- `Start`: 시작 유형 (2=자동, 3=수동, 4=비활성화)
- `Type`: 서비스 유형

#### 예약된 작업 (Scheduled Tasks)

`HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tasks`

`Actions` 값에서 실행 경로를 확인하여 의심스러운 스크립트나 실행 파일 여부를 분석한다.

### 5.2 코드 인젝션 흔적

#### AppInit_DLLs

| Registry 경로 | 설명 |
|---------------|------|
| `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows\AppInit_DLLs` | 모든 프로세스에 로드되는 DLL 경로 |
| `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Windows\LoadAppInit_DLLs` | 1이면 AppInit_DLLs 활성화 |

정상 시스템에서는 보통 비어있거나 비활성화되어 있다. 알 수 없는 DLL 경로가 등록되어 있다면 악성코드를 의심해야 한다.

### 5.3 네트워크 및 원격 접속

#### 원격 데스크톱 (RDP)

| Registry 경로 | 확인 내용 |
|---------------|-----------|
| `HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server` | `fDenyTSConnections`: 0이면 RDP 활성화 |
| `HKCU\Software\Microsoft\Terminal Server Client\Default` | 최근 접속한 원격 서버 IP/호스트명 |
| `HKCU\Software\Microsoft\Terminal Server Client\Servers` | 접속 이력이 있는 서버 목록 |

#### 네트워크 설정 변조

| Registry 경로 | 확인 내용 |
|---------------|-----------|
| `HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters` | DNS 서버 변경 여부 |
| `HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings` | 프록시 설정 (`ProxyEnable=1`이면 활성화) |

악성코드는 DNS나 프록시 설정을 변조하여 트래픽을 가로채거나 C2 서버와 통신할 수 있다.


## 6. Conclusion

이번 글에서는 Registry의 계층 구조를 이해하는 것부터 시작해, 데이터를 수집하고, 사용자의 행위와 악성코드의 흔적을 찾아내는 방법까지 살펴보았다. 시스템의 부팅 정보, 프로그램 실행 이력, 외부 장치 연결 흔적 등 흩어져 있는 데이터 조각들을 Registry 분석을 통해 연결하다 보면, 사건 발생 당시의 상황을 재구성할 수 있다.

다음에는 실제 시나리오 문제를 기반으로 4, 5장의 내용을 적용해 보겠다.


## 참고 자료

- [Windows Registry Structure](https://docs.microsoft.com/en-us/windows/win32/sysinfo/registry)
- [SANS DFIR Blog: Registry Forensics Analysis](https://www.sans.org/blog/registry-forensics/)
- [Eric Zimmerman's Tools (RLA)](https://ericzimmerman.github.io/#!index.md)
