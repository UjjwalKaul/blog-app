import AppBar from '../components/AppBar';
import BlogCard from '../components/BlogCard';

export default function Blogs() {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName="Ujjawal"
            title="How an Ugly single website makes 5000$ a month with Affiliate Marketting"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores, reprehenderit hic eos, nisi accusamus molestiae debitis, iusto deleniti commodi explicabo vitae eligendi! Esse suscipit quo rem maxime, accusamus in ipsa officiis dicta aliquid blanditiis odit nisi necessitatibus animi magnam facere numquam laudantium dignissimos. Maxime quae repellat officia architecto cupiditate!"
            publishedDate="1st Feb 2002"
          />
          <BlogCard
            authorName="Ujjawal"
            title="How an Ugly single website makes 5000$ a month with Affiliate Marketting"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores, reprehenderit hic eos, nisi accusamus molestiae debitis, iusto deleniti commodi explicabo vitae eligendi! Esse suscipit quo rem maxime, accusamus in ipsa officiis dicta aliquid blanditiis odit nisi necessitatibus animi magnam facere numquam laudantium dignissimos. Maxime quae repellat officia architecto cupiditate!"
            publishedDate="1st Feb 2002"
          />
          <BlogCard
            authorName="Ujjawal"
            title="How an Ugly single website makes 5000$ a month with Affiliate Marketting"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores, reprehenderit hic eos, nisi accusamus molestiae debitis, iusto deleniti commodi explicabo vitae eligendi! Esse suscipit quo rem maxime, accusamus in ipsa officiis dicta aliquid blanditiis odit nisi necessitatibus animi magnam facere numquam laudantium dignissimos. Maxime quae repellat officia architecto cupiditate!"
            publishedDate="1st Feb 2002"
          />
        </div>
      </div>
    </div>
  );
}
