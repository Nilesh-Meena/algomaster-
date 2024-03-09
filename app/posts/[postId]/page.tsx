import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/component/Sideheading";
import PostHeading from "@/app/component/PostHeading";
import { TracingBeam } from "@/app/component/ui/tracing-beam";

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
      <div className="flex flex-col md:flex-row pl-4">
        {/* Render Sidebar above the main content for screens smaller than md */}
        <div className="md:hidden mb-4 md:mb-0 md:w-1/4">
          <Sidebar contentHtml={contentHtml} />
        </div>

        {/* Main content with TracingBeam */}
        <TracingBeam className="md:w-3/4">
          <main className="px-4 md:px-0 prose prose-xl prose-slate dark:prose-invert">
            <article className="">
              <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
              <p>
                <Link href="/">← Back to home</Link>
              </p>
            </article>
          </main>
        </TracingBeam>

        {/* Render Sidebar next to the main content for screens larger than md */}
        <div className="hidden md:block md:sticky top-[72px] px-4 md:px-8 md:w-1/4">
          <Sidebar contentHtml={contentHtml} />
        </div>
      </div>
    </div>
  );
}
