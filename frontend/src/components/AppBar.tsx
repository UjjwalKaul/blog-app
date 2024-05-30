import { Avatar } from './BlogCard';

export default function AppBar() {
  return (
    <div className="border-b border-slate-300 flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center text-xl font-bold">
        Medium
      </div>
      <div>
        <Avatar name="Ujjawal" size="big" />
      </div>
    </div>
  );
}
