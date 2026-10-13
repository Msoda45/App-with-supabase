 import ImageCard from "@/app/compnend-supabase/products/Image-card";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
 async function Page({params}:{params: Promies<{ id: string }>}){
    const {id} = await params;
    return(
        <div className="mt-20 w-full max-w-6xl mx-auto grid grid-cols-6  gap-5">
            <ImageCard/>
            <div className="col-span-3">
                <h1 className="text-4xl font-bold text-pink-800">Pants</h1>
                <p className=" text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus fuga illo deserunt nesciunt ex sunt. Itaque minima sed ab ut dignissimos deleniti sapiente modi. Aperiam inventore dolorem quis architecto!</p>
            </div>
            <Card className="h-fit">
                <CardHeader>Rating</CardHeader>
                <CardContent>
                    <div className="flex justify-between w-full">
                    <span>Overall Ratings</span>
                    <span>9.7</span>
                    </div>
                    </CardContent>
            </Card>
        </div>
    )
}

export default Page