import Image from "next/image"
import WpPost from "@/types/WpPost";

export default async function PostList() {
  const data = await fetch('https://dailydev.gameful.dev/wp-json/wp/v2/posts?_embed&order=asc')
  const posts = await data.json()
  return (
    <ul className="max-w-screen-lg m-auto p-4 md:px-16 md:py-16 items-start flex flex-col gap-8">
      {posts.map((post: WpPost) => (
        <li key={post.id} className="bg-zinc-200 text-white w-full shadow-2xl flex flex-col md:flex-row border-t-2 border-zinc-700">
          <Image className="w-40 h-40 block p-4 object-cover object-center" 
            src={post._embedded['wp:featuredmedia'][0].source_url} 
            alt={post._embedded['wp:featuredmedia'][0].alt_text} 
            width={800} 
            height={800}/>
          <div className="p-4 md:pl-2 md:pr-8 bg-zinc-200">
            <strong className="text-zinc-700 text-lg md:text-2xl mb-2 md:mb-4 block">{post.title.rendered}</strong>
            <div className="prose prose-neutral" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
          </div>
        </li>
      ))}
    </ul>
  )
}