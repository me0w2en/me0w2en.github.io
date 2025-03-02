import React from "react";
import { FaLink } from "react-icons/fa";

const achievements = [
    { title: "KITRI 주관 White-hat School 1기 수료" },
    { title: "국가보안기술연구소 주관 윤리적 해커 양성 5기 수료" },
    { 
        title: "한국정보보호학회 충청지부 정보보호학술논문발표대회 포스터 발표",
        relatedProject: {
            title: "사용자 행위 중심의 협업 툴 ‘JANDI’ Artifact 분석 논문 투고",
            id: "jandi-paper"
        }
    }
];

export const Achievements = () => {
    const handleScrollToProject = (projectId: string) => {
        const projectElement = document.getElementById(projectId);
        if (projectElement) {
            projectElement.classList.add("highlight"); // 하이라이트 클래스 추가
            projectElement.scrollIntoView({ behavior: "smooth", block: "center" });

            // 3초 후 하이라이트 효과 제거
            setTimeout(() => {
                projectElement.classList.remove("highlight");
            }, 3000);
        }
    };

    return (
        <section id="achievements" className="py-16 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
                    Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                            <h3 className="text-xl font-bold text-green-400">{item.title}</h3>

                            {/* 관련 프로젝트 버튼을 하단에 배치 */}
                            {item.relatedProject && (
                                <div className="pt-4 ">
                                    <button
                                        onClick={() => handleScrollToProject(item.relatedProject.id)}
                                        className="flex items-center justify-center bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all w-full"
                                    >
                                        <FaLink className="mr-2" />
                                        관련 프로젝트 보기
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
