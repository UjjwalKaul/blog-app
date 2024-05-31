import { Blog } from '../hooks';
import AppBar from './AppBar';
import { Avatar } from './BlogCard';

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full pt-28 px-32 max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">
              Posted on: 2n December 2023
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name} />
              </div>
              <div>
                <div className="text-4xl font-bold">{blog.author.name}</div>
                <div className="pt-2 text-slate-500">
                  Random Catchphrase about author{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
