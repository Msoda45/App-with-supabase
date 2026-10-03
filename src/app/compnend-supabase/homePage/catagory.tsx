import { useTranslations } from "next-intl"

export default function Catagory(){
    const t = useTranslations("homepage.categories");
    const listCategories: {id: number , title: string , desc: string , image: string}[] = [
        {
            id: 1 , 
            title: t("cat1.title"),
            desc: t("cat1.desc"),
            image: "/images/woman-cloth/cloth3.png.png"
        },
          {
            id: 2 , 
            title: t("cat2.title"),
            desc: t("cat2.desc"),
            image: "/images/man-cloth/tm2.png.png"
        },
          {
            id: 3 , 
            title: t("cat3.title"),
            desc: t("cat3.desc"),
            image: "/images/acsessoriesMan/m1.png.jpg"
        },
    ] 
    return(
        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4"></div>
    )
}