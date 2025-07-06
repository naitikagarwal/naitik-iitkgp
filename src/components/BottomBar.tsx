import { Home, Folder, Book, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { to: "/", Icon: Home, label: "Home" },
  { to: "/projects", Icon: Folder, label: "Projects" },
  { to: "/blog", Icon: Book, label: "Blog" },
  { to: "/resume", Icon: FileText, label: "Resume" },
];

export const BottomBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                    bg-white/10 dark:bg-black/10 backdrop-blur-lg 
                    rounded-full p-2 shadow-lg 
                    border border-gray-200 dark:border-gray-800">
      <div className="flex gap-4">
        {navItems.map(({ to, Icon, label }) => (
          <Link
            key={to}
            to={to}
            className="group relative p-3 rounded-full 
                       hover:bg-gray-200 dark:hover:bg-gray-800 
                       transition-colors"
          >
            <Icon className="w-5 h-5" />

            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2              mb-2 px-2 py-1 whitespace-nowrap              bg-gray-800 text-white text-xs rounded              opacity-0 translate-y-1 pointer-events-none              transition-all duration-200 ease-out delay-75            group-hover:opacity-100 group-hover:translate-y-0">
              {label}
              <svg
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-[-1px]"
                width="12" height="6" viewBox="0 0 12 6" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6L0 0H12L6 6Z" fill="#1F2937" /> {/* matches bg-gray-800 */}
              </svg>

            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
