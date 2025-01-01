import Image from "next/image"
import WpPost from "@/types/WpPost";

export default async function PostList() {
  const data = await fetch('https://dailydev.gameful.dev/wp-json/wp/v2/posts?_embed')
  const posts = await data.json()
  return (
    <ul className="max-w-screen-2xl m-auto p-4 md:px-16 md:py-16 flex flex-wrap gap-8">
      {posts.map((post: WpPost) => (
        <li key={post.id} className="bg-zinc-900 text-white w-full md:w-1/2 shadow-lg">
          <Image className="w-full" src={post._embedded['wp:featuredmedia'][0].source_url} alt="" width={800} height={800}/>
          <div className="p-8 bg-zinc-200 border-t-2 border-zinc-700">
            <strong className="text-zinc-700 text-lg md:text-2xl mb-2 md:mb-4 block">{post.title.rendered}</strong>
            <div className="prose prose-neutral" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
          </div>
        </li>
      ))}
    </ul>
  )
}