import { getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";


type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    console.log(slug);
    
    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: ["/villa.png"]
        },
    };
}

export default async function BlogDetailsPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return <h1>Post Not Found</h1>;
    }
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>Slug URL: {slug}</p>
            </div>
        );
}