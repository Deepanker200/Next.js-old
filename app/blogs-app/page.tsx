import Link from "next/link";
import {getPosts} from "../../lib/posts";

export default function BlogsApp() {
    const posts = getPosts();
    return (
        <div>
            <h1>Blogs App</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blogs-app/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}