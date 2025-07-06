// import { ProjectCard } from '@/components/ProjectCard';
import { Timeline } from "@/components/Timeline";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { SiCodeforces } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

export const Home = () => {
  const [rating, setRating] = useState(null);
  const ref = useRef<HTMLHeadingElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    // calculate cursor position as percentages
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    ref.current.style.setProperty("--x", `${x}%`);
    ref.current.style.setProperty("--y", `${y}%`);
  };

  useEffect(() => {
    fetch("https://codeforces.com/api/user.info?handles=naitikagarwal")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK" && data.result.length) {
          setRating(data.result[0].rating);
        }
      })
      .catch((err) => console.error("CF API error:", err));
  }, []);
  return (
    <div
      className="max-w-4xl mx-auto px-4 py-20"
      style={{ fontFamily: "Kalam" }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1
          ref={ref}
          onMouseMove={onMouseMove}
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text transition-[background] duration-150 cursor-pointer"
          style={{
            backgroundImage:
              "radial-gradient(circle at var(--x,50%) var(--y,50%), #4ade80, #065f46)",
          }}
        >
          Hi, I&apos;m Naitik Agarwal
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
          IIT KGP '28 | Tech Enthusiast | Competitive Programmer
        </h2>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/naitikagarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 hover:text-purple-600 transition-colors" />
          </a>
          <a
            href="https://codeforces.com/profile/naitikagarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces className="w-6 h-6 hover:text-[#1F8ACB] transition-colors duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/naitik-kr-agarwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
          </a>
          <a href="mailto:naitik24.24@kgpian.iitkgp.ac.in">
            <Mail className="w-6 h-6 hover:text-red-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com/naitik_agarwal__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-[#cb1f36] transition-colors duration-200" />
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {" "}
              I am a second‑year BTech student at IIT Kharagpur with a strong
              passion for technology and software development. Despite my core
              discipline in Bioscience and Biotechnology, I have immersed myself
              in coding projects, continuously sharpening my problem‑solving
              skills.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I have a Codeforces rating of {rating !== null ? rating : "1300"}
              <a
                href="https://codeforces.com/profile/naitikagarwal"
                target="_blank"
              >
                <ExternalLink className="inline w-4 h-4 text-blue-600 align-text-top" />
              </a>
              , reflecting my dedication to data structures & algorithms, and
              I’ve built web applications using React and Node.js while
              exploring AI/ML projects in Python.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Python",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "TensorFlow",
                  "C++",
                  "Tailwind",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className=" px-3 py-1   bg-gray-100 dark:bg-gray-800  rounded-full text-sm  cursor-pointer  transition-colors duration-300 ease-in-out hover:bg-indigo-300 dark:hover:bg-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Interests</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "DSA",
                  "Web Dev",
                  "AI/ML",
                  "Open Source",
                  "Competitive Programming",
                ].map((interest) => (
                  <span
                    key={interest}
                    className=" px-3 py-1   bg-gray-100 dark:bg-gray-800  rounded-full text-sm  cursor-pointer  transition-colors duration-300 ease-in-out hover:bg-green-300 dark:hover:bg-green-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">My Experience</h2>
        <Timeline />
      </motion.section>

      {/* Featured Projects Preview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* <h2 className="text-2xl font-bold mb-6">Featured Projects</h2> */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sample project cards - replace with your actual projects */}
          {/* <ProjectCard
                        title="AI Image Generator"
                        description="Built a stable diffusion based image generator with React and Flask"
                        tags={['AI/ML', 'React', 'Python']}
                        link="/projects/ai-image-generator"
                    /> */}
          {/* <ProjectCard
                        title="Codeforces Analyzer"
                        description="Tool to analyze Codeforces performance with data visualization"
                        tags={['DSA', 'JavaScript', 'Chart.js']}
                        link="/projects/codeforces-analyzer"
                    /> */}
        </div>
        {/* <div className="mt-6 text-center">
                    <a href="/projects" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity">
                        View All Projects
                    </a>
                </div> */}
      </motion.section>
    </div>
  );
};
