import React from 'react';

export const Resume = () => {
  // This will redirect to the PDF
  React.useEffect(() => {
    window.location.href = '/resume.pdf';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center" style={{ fontFamily: "Kalam" }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        My Resume
      </h1>
      <p className="text-lg mb-8">Redirecting to resume PDF...</p>
      <p className="text-gray-500">
        If you're not redirected automatically, <a href="/resume.pdf" className="text-blue-600 dark:text-blue-400 underline">click here</a>.
      </p>
    </div>
  );
};