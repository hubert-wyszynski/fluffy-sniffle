import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { About } from "./about"

export default function Home() {
    return (
        <div className="prose dark:prose-invert">
        <About />
        {allPosts.map((post) => (
            <article key={post._id} className="">
            <Link className="no-underline" href={post.slug}>
                <h2 className="mb-1 text-pink-400">{post.title}</h2>
            </Link>
            {post.description && <p className="mt-0">{post.description}</p>}
            </article>
        ))}
        </div>
    )
}
