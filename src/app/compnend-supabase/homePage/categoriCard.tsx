import Image from "next/image";
import Link from "next/link";

export default function CategoriesCard({catagories}: {catagories: {title: string, desc: string, image: string}}){
    return(
        <Link href="/" className="border relative after:content[''] hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full hover:after:bg-pink-700/50 group hover:after:z-50">
         <div className="absolute left-4 top-4">
            <h1 className="text-2xl group-hover:font-black transition-all duration-700 text-left font-bold text-pink-800">{catagories.title}</h1>
            <span className="mt-2 text-sm text-gray-400">{catagories.desc}</span>
         </div>
         <div className="absolute group-hover:block bottom-8 left-4 hidden">
            <span className="underline underline-offset-4">Shop Now</span>
         </div>
          <Image src={catagories.image} alt={catagories.title} height={800} width={800} className="w-full object-cover z-20"/>
        </Link>
    )
}