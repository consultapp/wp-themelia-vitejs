import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <div>
      <Link to="/">1</Link>
      &nbsp;
      <Link to="/posts/2/">2</Link>
    </div>
  );
}
