import Image from "next/image"
import WpPost from "@/types/WpPost";

export default async function PostList() {
  const data = await fetch('https://dailydev.gameful.dev//wp-json/wp/v2/pages?slug=about')
  const posts = await data.json()
  return (
    <div className="bg-white my-4 md:my-16 mx-auto max-w-screen-lg p-4 md:p-16">
      {posts.map((post: WpPost) => (
        <>
        <strong>{post.title.rendered}</strong>
        <div className="prose prose-neutral" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        </>
      ))}
    </div>
  )
}