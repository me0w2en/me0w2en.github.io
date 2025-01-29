import { FaEnvelope, FaGithub, FaPencilAlt, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-12">Contact Me</h2>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-green-400" />
            <a href="mailto:your-email@example.com" className="text-lg text-gray-300 hover:text-green-400">
              your-email@example.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPencilAlt className="text-2xl text-green-400" />
            <a href="https://your-blog.tistory.com" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-green-400">
              https://your-blog.tistory.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="text-2xl text-green-400" />
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-green-400">
              https://github.com/your-github
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-2xl text-green-400" />
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-green-400">
              https://linkedin.com/in/your-linkedin
            </a>
          </div>
          <img src="/qrcode.png" alt="QR Code" className="w-24 h-24" />
        </div>
      </div>
    </section>
  );
};
