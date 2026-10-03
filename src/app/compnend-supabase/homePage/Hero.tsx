import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection(){
  const t = useTranslations("homepage")
    return(
        <div className="w-full max-w-6xl items-center mx-auto grid grid-cols-1 md:grid-cols-2">
            <div className="mt-3 flex flex-col gap-4">
                <h1 className="text-6xl font-bold text-pink-800">{t("hero.title")}</h1>
                <p className="text-sm text-shadow-black text-gray-700">{t("hero.descrabtion")}</p>
                <div className="flex gap-4">
                    <Button className="bg-white" variant={"outline"}>{t("hero.Btn_Explore-more")}</Button>
                    <Button className="bg-blue-500  text-white hover:bg-blue-800 transition-colors duration-300 px-8">{t("hero.Btn_join")}</Button>
                </div>
            </div>
            <div>
            <Image src="/images/logo.png.png" className="w-full h-full object-cover" alt="image" height={1000} width={1000}/>
            </div>
        </div>
    )
}