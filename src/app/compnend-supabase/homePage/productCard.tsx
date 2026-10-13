import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
// import {Card , CardHeader , CardContent} from "@/components/ui/Card"
export default function ProductCard({ product}: {id: number,product: {name: string, price: number , image: string}}){
    return(
        <Link href={`/products/${product.id}`}>
        <Card className="p-0">
            <CardHeader className="p-0 relative ">
                <Image src={product.image} alt={product.name} width={800} height={800} className="h-80 object-cover "/>
           <div className="absolute left-1/2 bottom-5 bg-white hidden group-hover:block hover:bg-black hover:text-white hover:cursor-pointer rounded-full p-4 -translate-x-1/2">
                <h1>Quick View</h1>
           </div>
            </CardHeader>
            <CardContent className="p-4 m-0">
                <h1 className="text-xl font-semibold  text-gray-500">{product.name}</h1>
                <span>{product.price}</span> 
            </CardContent>
        </Card>
        </Link>
    )
}