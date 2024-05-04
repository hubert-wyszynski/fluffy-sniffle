import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { MainHeader } from "./main-header"

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options as any).replace(',', '');
}

export default function Home() {
    return (
        <div className="prose dark:prose-invert">
            <MainHeader />
            <div className="mt-10">
                {allPosts.map((post) => (
                    <article key={post._id} className="">
                        <Link className="no-underline" href={post.slug}>
                            <h2 className="mb-1 text-slate-900 dark:text-slate-50">{post.title}</h2>
                        </Link>
                        <div className="flex gap-2 mb-2">
                            {post.date && (
                                <div className="mt-2 text-slate-900 dark:text-slate-50">
                                    <span className="bg-blue-500/20 dark:bg-blue-500/40 p-2 rounded-lg mr-2 text-sm">🗓️</span>
                                    <span className="text-xs">{formatDate(post.date)}</span>
                                </div>
                            )}
                            {
                                post.readingTime && (
                                    <div className="mt-2 text-slate-900 dark:text-slate-50">
                                        <span className="bg-blue-500/20 dark:bg-blue-500/40 p-2 rounded-lg mr-2 text-sm">⏱️</span>
                                        <span className="text-xs">Reading time: {post.readingTime} min</span>
                                    </div>
                                )
                            }
                        </div>
                        {post.description && <p className="mt-2 text-slate-900 dark:text-slate-50">{post.description}</p>}
                    </article>
                ))}
            </div>
        </div>
    )
}
