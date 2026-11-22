import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seo Posts",
    description: "This is the SEO posts page",
    keywords: ["Next.js", "React", "JavaScript", "Web Development"],
    authors: [{ name: "John Doe", url: "https://example.com" }],

    openGraph: {
        siteName: "Next.js Learning Course",
        title: "Next.js Learning Course",
        description: "Learning Next.js 16 with App Router",
        images: [
            {
                url: "/villa.jpg",
                width: 800,
                height: 600,
                alt: "SEO Posts Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Learning Course",
        description: "Learning Next.js 16 with App Router",
        images: ["/villa.jpg"],
    },
}

export default function SeoPosts() {
    return (
        <div>
            <h1>SEO Posts</h1>
        </div>
    );
}