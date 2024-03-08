import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/component/Sideheading";
import PostHeading from "@/app/component/PostHeading";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);
  // console.log(contentHtml);

  return (
    <div>
      <PostHeading title={title} date={date} />
      <div className="flex">
        <main className="px-16 prose prose-xl prose-slate w-full max-w-none text-black ">
          <article className="">
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <p>
              <Link href="/">← Back to home</Link>
            </p>
          </article>
        </main>
        <Sidebar contentHtml={contentHtml} />
      </div>
    </div>
  );
}
