import { motion } from 'framer-motion';
export const Timeline = () => {
const events = [
  {
    year: "2024",
    title: "Associate Member - Student Welfare Group",
    description: "Contributed to campus welfare initiatives as an Associate Member of the SWG at IIT Kharagpur (Sep 2024 – May 2025)."
  },
  {
    year: "2024",
    title: "Campus Affiliate - Kshitij, IIT Kharagpur",
    description: "Joined Kshitij as a Campus Affiliate (Oct 2024 – June 2025), actively engaged in event management and campus outreach."
  },
  {
    year: "2024",
    title: "Trainee Developer - KodeinKGP",
    description: "Worked as a Trainee Developer (Nov 2024 – May 2025), focusing on React.js and Machine Learning projects."
  },
  {
    year: "2025",
    title: "Senior Executive Member - KodeinKGP",
    description: "Promoted to Senior Executive Member at KodeinKGP (May 2025 – Present), leading development and mentoring responsibilities."
  }
];


  return (
<div className="relative mx-auto my-12 w-full max-w-3xl px-4">
  {/* Vertical timeline line */}
  <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-600 via-emerald-500 to-lime-500 transform -translate-x-1/2" />

  {events.map((event, i) => {
    const isLeft = i % 2 === 0;
    return (
      <motion.div
        key={i}
        className={`
          relative mb-12 w-full
          md:w-1/2 md:px-6
          ${isLeft ? "md:left-0 md:text-right" : "md:left-1/2 md:text-left"}
        `}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Connector dot */}
        <div
          className={`
            absolute top-1/2 transform -translate-y-1/2
            ${isLeft
              ? "right-[-0.4rem] md:block hidden"
              : "left-[-0.4rem] md:block hidden "}
            before:content-[''] before:block before:w-3 before:h-3 
            before:bg-white before:border-4 before:border-emerald-500 
            before:rounded-full
          `}
        />

        {/* Card */}
        <div
          className={`
            bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border
            border-gray-200 dark:border-gray-800
            hover:shadow-2xl transition-shadow duration-300
            ${isLeft ? "md:ml-auto" : "md:mr-auto"}
          `}
        >
          <div className="flex items-center mb-3 justify-center md:justify-start">
            <span className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 rounded-full text-xs font-semibold">
              {event.year}
            </span>
            <h3 className="ml-4 text-lg font-bold text-gray-800 dark:text-gray-100">
              {event.title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center md:text-left">
            {event.description}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>

  );
};