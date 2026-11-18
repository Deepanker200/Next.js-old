"use client"

import { useSearchParams } from "next/navigation"


export default function CurrentFilterPage() {
    
    const searchParams=useSearchParams()
    const category=searchParams.get("category")
    console.log(searchParams);
    
    
    
    return (
        <div>
            <h1>Current Filter: {category || "All"}</h1>
            
        </div>
    );
}