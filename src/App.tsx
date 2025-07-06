// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { Resume } from "./pages/Resume";
import { BottomBar } from "./components/BottomBar";
import { ThemeProvider } from "./components/theme-provider";
import { FloatingActions } from "./components/FloatingActions";
import { BlogPost } from "./pages/blog/[slug]";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <FloatingActions />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/resume" element={<Resume />} />
          </Routes>
          <BottomBar />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
