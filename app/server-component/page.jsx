import Counter from "../components/Counter";

export default async function ServerComponentPage() {
    
    const data=await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts=await data.json()
    
    return (
        <div>
            <h1>Server Component Page</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <Counter/>
        </div>
    );
}