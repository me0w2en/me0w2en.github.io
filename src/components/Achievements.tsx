const achievements = [
    { title: "Published Research Paper", description: "Presented at ISS 2024" },
    { title: "Certified Ethical Hacker", description: "Earned CEH Certification in 2023" },
    { title: "Top Performer at Internship", description: "Recognized for outstanding work in 2024" },
  ];
  
  export const Achievements = () => {
    return (
      <section id="achievements" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-12">
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-green-400">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  