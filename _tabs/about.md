---
layout: page
icon: fas fa-briefcase
order: 4
---

<style>
#panel-wrapper {
    display: none !important;
}

#footer, footer, #tail-wrapper {
    display: none !important;
}

main[aria-label="Main Content"] {
    max-width: 100% !important;
    width: 100% !important;
}

.typing-text {
    color: #00d4aa;
    font-weight: bold;
    border-right: 3px solid #00d4aa;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { border-color: #00d4aa; }
    51%, 100% { border-color: transparent; }
}

.hero-section {
    text-align: center;
    padding: 0;
    margin: 0;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
}

.hero-section h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
}

.hero-section p {
    font-size: 1.3rem;
    line-height: 1.8;
    margin-bottom: 0;
    max-width: 800px;
}

.about-section {
    margin-bottom: 15rem;
    text-align: left;
}

.about-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.about-section > p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 3rem;
    text-align: center;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 0;
    align-items: start;
    text-align: left;
}

.service-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0;
    border: none;
    box-shadow: none;
    background: transparent;
}

.service-item:hover {
    transform: none;
    box-shadow: none;
    transition: none;
}

.service-icon-circle {
    width: 60px;
    height: 60px;
    border: 2px solid #00d4aa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    flex-shrink: 0;
    background: transparent;
}

.service-icon {
    font-size: 1.4rem;
    color: #00d4aa;
}

.service-content .service-title {
    margin: 0 0 0.3rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1.3;
}

.service-content p {
    margin: 0;
    line-height: 1.4;
    font-size: 0.9rem;
}

.about-image {
    border: none;
    border-radius: 10px;
    padding: 0;
    text-align: center;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1126&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    position: relative;
    overflow: hidden;
}

.about-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.about-image > div {
    position: relative;
    z-index: 2;
}

.experiences-section {
    border-radius: 15px;
    text-align: center;
    margin-bottom: 5rem;
}

.stats-container {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    justify-content: center;
}

.stat-card {
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    flex: 1;
    max-width: 350px;
    min-width: 300px;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #00d4aa;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #666;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.data-table th {
    padding: 0.8rem;
    text-align: center;
    border-bottom: 2px solid #00d4aa;
    font-weight: 600;
}

.data-table td {
    padding: 0.8rem;
    border-bottom: 1px solid #ddd;
}

.data-table tr:hover {
    background: rgba(0, 212, 170, 0.05);
}

.sub-title {
    font-weight: bold;
}

@media (max-width: 768px) {
    .hero-section {
        height: 80vh;
        padding: 2rem 1rem;
    }
    
    .hero-section h1 {
        font-size: 2.5rem;
    }
    
    .hero-section p {
        font-size: 1.1rem;
    }
    
    .about-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .stats-container {
        flex-direction: column;
        align-items: center;
    }
    
    .stat-card {
        max-width: 100%;
    }
    
    .experiences-section {
        padding: 2rem 1rem;
    }
    
    .service-item {
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .service-icon-circle {
        margin-right: 0;
        margin-bottom: 1rem;
        width: 60px;
        height: 60px;
    }
}
</style>

<!-- Hero Section -->
<div class="hero-section">
    <h1>We also can <span class="typing-text" id="typingText"></span></h1>
    <p>체계적인 포렌식 교육과 실전 경험을 통해<br>
    디지털 포렌식 전문가를 양성하며<br>
    정보보안 커뮤니티 발전에 기여합니다</p>
</div>

<!-- About Section -->
<div class="about-section">
    <h3 class="sub-title">ABOUT US</h3>
    
    <div class="about-grid">
        <div>
            <p>2025년 6월 22일에 시작된 HSPACE FORENSIC LAB은 디지털 포렌식 전문 교육 및 연구 단체로, 체계적인 운영 시스템을 통해 포렌식 전문가를 양성하고 커뮤니티를 발전시키는 것을 목표로 합니다. 실제 침해사고 시나리오를 기반으로 한 실무형 교육을 통해 이론과 실전의 균형을 추구합니다.</p>
            
            <div class="service-item">
                <div class="service-icon-circle">
                    <div class="service-icon">👨‍🏫</div>
                </div>
                <div class="service-content">
                    <p class="service-title">정기 세미나 및 스터디</p>
                    <p>정기 세미나와 스위스 시스템을 활용한 스터디 그룹 매칭을 통해 지속적인 학습과 성장 기회를 제공합니다</p>
                </div>
            </div>

            <div class="service-item">
                <div class="service-icon-circle">
                    <div class="service-icon">📄</div>
                </div>
                <div class="service-content">
                    <p class="service-title">팟(POD) 시스템</p>
                    <p>생산팟과 소비팟으로 역할을 분담하여 자연스러운 지식 공유와 협업을 통한 집단 지성 향상을 도모합니다</p>
                </div>
            </div>

            <div class="service-item">
                <div class="service-icon-circle">
                    <div class="service-icon">👓</div>
                </div>
                <div class="service-content">
                    <p class="service-title">디지털 포렌식 대회 참가</p>
                    <p>챌린지팟과 루키팟으로 나누어 수상을 목표로 하는 팀과 학습 중심의 팀으로 구분하여 각자의 목표에 맞는 대회 참가 시스템을 운영합니다</p>
                </div>
            </div>
        </div>

        <div class="about-image">
        </div>
    </div>
</div>

<!-- Experiences Section -->
<div class="experiences-section">
    <h3 class="sub-title">EXPERIENCES</h3>
    <p>체계적인 시스템과 다양한 활동을 통해 포렌식 전문가를 양성하고 있습니다</p>
    
    <div class="stats-container">
        <div class="stat-card">
            <div class="stat-number"><1</div>
            <div class="stat-label">운영 연도</div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>활동 내역</th>
                        <th>진행 현황</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>정기 세미나</td>
                        <td>1회</td>
                    </tr>
                    <tr>
                        <td>대회 참가</td>
                        <td>연 10회+</td>
                    </tr>
                    <tr>
                        <td>챌린지 개최</td>
                        <td>연 1회</td>
                    </tr>
                    <tr>
                        <td>스터디 그룹</td>
                        <td>상시 운영</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">활동 멤버</div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>멤버 등급</th>
                        <th>인원 수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>생산팟</td>
                        <td>10명</td>
                    </tr>
                    <tr>
                        <td>소비팟</td>
                        <td>15명</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">활동 참여율</div>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>평가 기준</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>세미나 참여</td>
                        <td>10-30점</td>
                    </tr>
                    <tr>
                        <td>대회 참가</td>
                        <td>30점</td>
                    </tr>
                    <tr>
                        <td>분석 보고서</td>
                        <td>20점</td>
                    </tr>
                    <tr>
                        <td>문제 제작</td>
                        <td>50점</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>
const texts = ['do Digital Forensics', 'analyze Incidents', 'solve CTF Problems', 'build Community'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];
    const typingElement = document.getElementById('typingText');

    if (!typingElement) return;

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
    typeText();
});
</script>