import { getSortedPostsData } from "@/lib/posts";
import Card from "./Card";

export default function Posts() {
  const blogPosts: BlogPost[] = getSortedPostsData();

  return (
    <div className="mt-6 mx-4">
      <div className="mt-8 w-full">
        <Card post={blogPosts} />
      </div>
    </div>
  );
}
