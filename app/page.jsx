import Image from "next/image"

export default function Home() {
    return (
       <main style={{padding: "40px"}}>
        <p>This is Main Component</p>

        <Image 
        // src='/villa.jpg'
        src="https://freakcoder.com/Images/deep.jpg"
        alt='Hero Image'
        width={500}
        height={300}
        // priority
        />
       </main>
    );
}