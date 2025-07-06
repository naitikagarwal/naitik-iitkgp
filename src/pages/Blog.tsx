// pages/blog.tsx
import { Link } from "react-router-dom";
import posts from '../data/posts.json';

export const Blog = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20" style={{ fontFamily: "Kalam" }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
        My Blog
      </h1>
      
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors duration-200">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link> 
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      
    </div>
  );
};