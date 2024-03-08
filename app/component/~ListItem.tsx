// import Link from "next/link";
// import getFormattedDate from "@/lib/getFormattedDate";
// import Card from "./Card";

// type Props = {
//   post: BlogPost;
// };

// export default function ListItem({ post }: Props) {
//   const { id, title, date, seoTitle, layout, tag } = post;
//   const formattedDate = getFormattedDate(date);

//   return (
//     <li className="mt-4 text-2xl dark:text-white/90">
//       <Link className="underline text-black" href={`/posts/${id}`}>
//         {title}
//       </Link>
//       <br />

//       <Card post={post} />
//     </li>
//   );
// }
