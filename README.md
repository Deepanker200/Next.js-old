- Dynamic Routing in Nextjs
 - Steps:
    1. Checks the URL.
    2. Matches /blog to the blog folder.
    3. Finds [slug] as a dynamic segment.
    4. Matches nextjs against that segment.
    5. Renders blog/[slug]/page.tsx.
    6. Passes { slug: "nextjs" } through params.

- Note: Axios doesn't provide Next.js Data Cache integration.