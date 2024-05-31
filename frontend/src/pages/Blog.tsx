import FullBlog from '../components/FullBlog';
import { useBlog } from '../hooks';
import { useParams } from 'react-router-dom';
export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || '' });
  if (loading) {
    return <div>Loading..</div>;
  }
  return <div>{blog && <FullBlog blog={blog} />}</div>;
}
