// pages/blog/[slug].tsx
import { useParams } from "react-router-dom";
import posts from "../../data/posts.json";

export const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div
      className="max-w-3xl mx-auto px-4 py-20"
      style={{ fontFamily: "Kalam" }}
    >
      <article className="prose dark:prose-invert prose-lg max-w-none">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          {/* You'll need a Markdown renderer if your content is in Markdown */}
          {/* For example, using react-markdown: */}
          {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
};
