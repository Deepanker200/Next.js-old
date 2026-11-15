import Link from "next/link"

const blogs = [
    { slug: "nextjs", title: "NextJS Basics" },
    { slug: "reactjs", title: "ReactJS Basics" },
    { slug: "nodejs", title: "NodeJS Basics" },

]

export default function BlogPage() {
    return (
        <div>
            <h1>Blog Page</h1>
            <ul>
                {
                    blogs.map((blog) => (
                        <li key={blog.slug}>
                            <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
}