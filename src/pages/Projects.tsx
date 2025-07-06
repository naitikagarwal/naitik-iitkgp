import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Jister",
      description:
        "An IIT JEE practice platform with smart analytics, peer competition, and a vast question bank for effective preparation.",
      tags: ["React", "Supabase", "ShadCn"],
      link: "https://jister.vercel.app/",
      github: "https://github.com/naitikagarwal/jister",
    },
    {
      title: "Note App",
      description:
        "A full-featured note-taking app built with React, TypeScript, and localStorage support for persistence.",
      tags: ["React", "TypeScript"],
      link: "https://nootey.vercel.app/",
      github: "https://github.com/naitikagarwal/note-app",
    },
    {
      title: "Weather App",
      description:
        "A clean and responsive weather forecasting app using React and Weather API, deployed via Netlify.",
      tags: ["React", "API", "WeatherApi"],
      link: "https://dekho-mausam.netlify.app/",
      github: "https://github.com/naitikagarwal/weather-app",
    },
  ];

  return (
    <div
      className="max-w-4xl mx-auto px-4 py-20"
      style={{ fontFamily: "Kalam" }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800 cursor-default">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};
