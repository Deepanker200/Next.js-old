export default async function Page() {

const res=await fetch('https://jsonplaceholder.typicode.com/posts');
const posts=await res.json();

throw new Error('Failed to fetch posts');

    return (
        <div>
            <h1>Page</h1>
            <ul>
                {posts.map((post:any)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
                </ul>
        </div>
    );
}