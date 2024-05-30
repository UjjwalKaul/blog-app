import AppBar from '../components/AppBar';
import BlogCard from '../components/BlogCard';
import useBlogs from '../hooks';

export default function Blogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <div className="text-3xl font-bold">Loading...</div>;
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => {
            return (
              <BlogCard
                id={blog.id}
                key={blog.id}
                authorName={blog.author.name || 'Anonymous'}
                title={blog.title}
                content={blog.content}
                publishedDate="1st Feb 2002"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
