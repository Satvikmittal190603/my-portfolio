import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "LoRA Fine-Tuning T5",
    description: "Fine-tuned T5 with LoRA and deployed on Hugging Face Spaces.",
    demo: "https://huggingface.co/spaces/satvik190603/llm-fine-tune",
    code: "https://github.com/Satvikmittal190603/Fine-tune-LLM",
  },
  {
    title: "Smart Document Q&A",
    description: "Document Q&A with SentenceTransformers + FAISS + Gradio.",
    demo: "https://huggingface.co/spaces/satvik190603/RAG_Chatbot_hf",
    code: "https://github.com/Satvikmittal190603/RAG-Chatbot",
  }
];

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Satvik Mittal</h1>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#blog" className="hover:text-gray-300">Blog</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      <section id="home" className="flex flex-col justify-center items-center text-center py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Satvik</span> 👋
        </motion.h2>
        <p className="max-w-2xl text-gray-300 mb-6">
          AI/ML Enthusiast | LLM Developer | Freelancer-in-Progress 🚀
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/satvik190603" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/satvik-mittal" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="mailto:satvik190603@gmail.com"><Mail /></a>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold mb-10 text-center">🚀 Featured Projects</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800"
            >
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                  <ExternalLink size={16} /> Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="blog" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">📝 My Blogs</h3>
        <p className="text-gray-300 mb-4">
          I write about AI/ML, LLMs, and deployment.
        </p>
        <a href="https://medium.com/@satvik190603" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 underline">
          Visit my Medium →
        </a>
      </section>

      <section id="contact" className="text-center py-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-4">📬 Get In Touch</h3>
        <p className="text-gray-400 mb-6">Let's collaborate on AI/ML projects or freelance opportunities.</p>
        <a href="mailto:satvik190603@gmail.com" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">Email Me</a>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Satvik Mittal • Built with ❤️
      </footer>
    </div>
  );
}
