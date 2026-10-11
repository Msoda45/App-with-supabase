import React from "react"
import { useTranslations } from "next-intl";
import { Handshake, Languages, ShieldCheck, ShoppingCartPlus } from "lucide-react";
import { Card, CardHeader,CardContent } from "@/components/ui/card";
import FeaturedProducts from "./featured-products";
function FeatuerSection (){
    const t = useTranslations("homepage.features");
    const listFeatures:{id: number; title: string; desc: string}[] = [
        {
            id: 1,
            title: t("feature1.title"),
            desc: t("feature1.desc")
        },
         {
            id: 2,
            title: t("feature2.title"),
            desc: t("feature2.desc")
        },
         {
            id: 3,
            title: t("feature3.title"),
            desc: t("feature3.desc")
        },
         {
            id: 4,
            title: t("feature4.title"),
            desc: t("feature4.desc")
        },
    ]
    return (
        <div className="w-full mt-5 max-w-6xl mx-auto">
           <h2 className="text-center text-sm text-gray-500">{t("subtitle")}</h2>
           <h1 className="title">{t("title")}</h1>
           <div className="grid w-full grid-cols-4 gap-6">
             {listFeatures.map((feature1)=>(
                <Card key={feature1.id}>
                    <CardHeader className="w-full flex justify-center">
                        <span className="inline-block p-4 w-fit rounded-full bg-pink-800 text-white">
                            {feature1.id ===1 ? <ShieldCheck/> : feature1.id ===2 ? <Handshake/> : feature1.id ===3 ? <Languages/> : <ShoppingCartPlus/>}
                            </span></CardHeader>
                        <CardContent>
                            <h1 className="text-2xl font-bold text-gray-500">{feature1.title}</h1>
                            <span className="text-gray-400">{feature1.desc}</span>
                        </CardContent>
                </Card>
             ))}
           </div>
        </div>
    );
};

export default FeatuerSection