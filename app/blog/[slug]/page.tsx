interface BlogPageProps {
    params: {
        slug: string
    }
}


const blogData: Record<string, { title: string, content: string }> = {
    "nextjs": {
        title: "NextJS Basics",
        content: "NextJS is a JS Framework"
    },
    "reactjs": {
        title: "ReactJS Basics",
        content: "ReactJS is a JS Library"
    },
    "nodejs": {
        title: "NodeJS Basics",
        content: "NodeJS is a JS runtime environment"
    }
}

export default async function BlogDetailsPage({ params }: BlogPageProps) {
    const { slug } = await params
    console.log(slug);
    

    const blog = blogData[slug]

    if (!blog) {
        return <h1>Blog Not Found</h1>
    }
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>
                {blog.content}
            </p>
            <p>Slug URL: {slug}</p>
        </div>
    )
}