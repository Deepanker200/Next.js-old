export type Post = {
    slug: string;
    title: string;
    description: string;
    content: string;
};

export const posts: Post[] = [
    {
        slug: "learn-next-js",
        title: "Learn Next.js",
        description: "A comprehensive guide to learning Next.js.",
        content: "Next.js is a powerful React framework that enables server-side rendering and static site generation. It provides an excellent developer experience and is widely used in the industry."
    },
    {
        slug: "react-js-routing",
        title: "React.js Routing",
        description: "Learn how to implement routing in React applications.",
        content: "React Router is the most popular routing library for React applications. It allows you to navigate between different components based on the URL."
    },
    {
        slug:"python-programming",
        title:"Python Programming",
        description:"Learn Python programming from scratch.",
        content:"Python is a versatile programming language that is widely used in web development, data science, artificial intelligence, and more. It has a simple syntax and a large community of developers."
    }
];

export function getPosts(){
    return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
    return posts.find(post => post.slug === slug);
}