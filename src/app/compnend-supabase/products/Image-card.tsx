"use client"
import Image from "next/image";
import { useState } from "react";

export default function ImageCard(){
    const listImage =["p4.png.png" , "p3.png.jpeg"];
    const [index , setIndex] = useState(0);
    return(
        <div className="w-full flex flex-col gap-3 col-span-2">
            <Image
            src={`/images/cloth/${listImage[index]}`}
            alt="product image"
            height={1000}
            className="w-full object-cover h-96 border rounded-lg"
            width={1000}
            />
            <div className="grid grid-cols-2 gap-3">
                {listImage.map((image , index)=>(

                 <Image
                 key={index}
                 onClick={()=> setIndex(index)}
            src={`/images/cloth/${image}`}
            alt="product image"
            className="w-full h-48 rounded-2xl"
            height={1000}
            width={1000}
            />
                ))}
            </div>
        </div>
    ) 
}