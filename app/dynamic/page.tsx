interface Post {
    id: number;
    title: string;
    body: string;
}

export default async function DynamicPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",       //for dynamic fetching of data: it disables Nextjs Data Cache
        next: {
            revalidate: 10,     //for static fetching of data: it enables Nextjs Data Cache and revalidates the cache every 10 seconds
        }
    }
    )

    const posts: Post[] = await res.json();

    return (
        <div>
            <h1>Posts Fetch Data by Server</h1>
            <ul>
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}