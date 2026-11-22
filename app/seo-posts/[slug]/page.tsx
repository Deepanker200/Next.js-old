import type {Metadata} from "next";

type Props={
    params:Promise<{slug:string}>

}

async function getPostData(slug:string){
    return{
        title: `Post about ${slug}`,
        description: `This is a post about ${slug}`,
    }
}

//Dynamic SEO
export async function generateMetadata({params}:Props):Promise<Metadata>{
    const {slug}=await params;
    const postData=await getPostData(slug);
    return{
        title: postData.title,
        description: postData.description,
        openGraph:{
            title: postData.title,
            description: postData.description,
    }
}
}

//Page Content
export default async function PostPage({params}:Props){
    const {slug}=await params;
    return(
        <div>
            <h1>Post: {slug}</h1>
            <p>This is the content of the post about {slug}.</p>
        </div>
    )
}