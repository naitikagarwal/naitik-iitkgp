import { motion } from "framer-motion";
// import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  link,
  github,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{ duration: 0.3 }}
      className="relative border rounded-lg overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:border-blue-400/30 dark:hover:border-blue-500/30 transition-all group"
    >
      {/* Glass overlay that appears on hover */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative p-6 z-10">
        {/* Title with tech-inspired icon */}
        <h3 className="text-xl font-semibold mb-3">
          <a
            href={link}
            target="_blank"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                clipRule="evenodd"
              />
            </svg>
            {title}
          </a>
        </h3>

        {/* Description with improved readability */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-[15px] leading-relaxed cursor-default">
          {description}
        </p>

        {/* Tags with glass effect on hover */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              // whileHover={{ scale: 1.05 }}
              className="px-2.5 py-1 text-xs rounded-md bg-gray-100/70 dark:bg-gray-800/70 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-all cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action buttons with glass effect */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700/50">
          <a
            href={link}
            target="_blank"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mt-0.5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              className="p-2 rounded-md hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700 dark:text-gray-300"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
