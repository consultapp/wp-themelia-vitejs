import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 | Page not found</h1>
      <Link to="/">Got to main.</Link>
    </div>
  );
}
