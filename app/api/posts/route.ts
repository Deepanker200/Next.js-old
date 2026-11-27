import { NextResponse } from "next/server";

const posts=[
    {id:1,title:"Learn Next.js"},
    {id:2,title:"Build a Full-Stack App"},
    {id:3,title:"Deploy to the Cloud"}
]

export async function GET(){
    return NextResponse.json(posts);
}

