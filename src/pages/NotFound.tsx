import { Link } from "react-router";
export default function NotFoundPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">404 Not Found</div>
      <Link to="/">Home from Link</Link> {/* full refresh */}
      <br />
      <a href="/">Home from a</a> {/* client side routing without refresh */}
    </div>
  );
}
