import Link from "next/link";
import { products } from "@/lib/products";


type Product = {
   searchParams: Promise<{
        category?: string;
        page?:string
   }>
};



export default async function ProductsPage({ searchParams }: Product) {
    const { category, page } = await searchParams;
    const PAGE_SIZE=2
    
    let filtered=products;

    if(category){
        filtered=filtered.filter(product=>product.category===category)
    }

    const currentpage=Number(page)||1
    const start=(currentpage-1)*PAGE_SIZE

    const paginated=filtered.slice(start,start+PAGE_SIZE)

    return(
        <div>
            <h1>Products Page</h1>
            <div style={{display:"flex",gap:12}}>
                <Link href="/productspage">All</Link>
                <Link href="/productspage?category=Electronics">Electronics</Link>
                <Link href="/productspage?category=Clothing">Clothing</Link>
                <Link href="/productspage?category=Home Appliances">Home Appliances</Link>
                <Link href="/productspage?category=Books">Books</Link>
                <Link href="/productspage?category=Stationery">Stationery</Link>
            </div>

            {/* Product List */}
            <ul>
                {paginated.map((p)=>(
                    <li key={p.id}>{p.id}: {p.name} - {p.category}</li>
                ))}
            </ul>

            {/* Pagination */}
            <div style={{display:"flex",gap:12}}>
                {currentpage>1 && (
                    <Link href={`/productspage?category=${category||""}&page=${currentpage-1}`}>Previous</Link>
                )}

                {start+PAGE_SIZE<filtered.length && (
                    <Link href={`/productspage?category=${category||""}&page=${currentpage+1}`}>Next</Link>
                )}
            </div>
        </div>
    )
}