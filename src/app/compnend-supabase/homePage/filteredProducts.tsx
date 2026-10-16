import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function FilteredProducts({showFilter}:{showFilter: boolean}){
  const t = useTranslations("homepage.filter")  
  return(
         <div className={`w-full ${showFilter ? 'block' : 'hidden'} dark:text-gray-50 h-fit mb-4 rounded-md dark:bg-gray-600  bg-gray-300 grid grid-cols-4 w-full gap-10  p-12`}>
              {/* sortby */}
              <div>
                <h1 className="text-pink-600  font-bold text-2xl">{t("sort_by.title")}</h1>
                <div className="flex flex-col items-start gap-3 bg">
                <Button className="hover:text-pink-500 font-extralight" variant="link">{t("sort_by.defult")}</Button>
                <Button className="hover:text-pink-500 font-extralight" variant="link">{t("sort_by.poularity")}</Button>
                <Button className="hover:text-pink-500 font-extralight" variant="link">{t("sort_by.newness")}</Button>
                <Button className="hover:text-pink-500 font-extralight" variant="link">{t("sort_by.price_low_to_high")}</Button>
                <Button className="hover:text-pink-500 font-extralight" variant="link">{t("sort_by.price_High_to_Low")}</Button>
                </div>
              </div>
              {/* price */}
              <div className="">
                <h1 className="text-pink-600  font-bold text-2xl">{t("price.title")}</h1>
                {/* buttons */}
                <div className="flex flex-col gap-3 items-start">
                <Button className="hover:text-pink-500  font-extralight" variant="link">{t("price.all")}</Button>
                <Button className="hover:text-pink-500  font-extralight" variant="link">300-600</Button>
                <Button className="hover:text-pink-500  font-extralight" variant="link">600-1000</Button>
                <Button className="hover:text-pink-500  font-extralight" variant="link">1000-2500</Button>
                <Button className="hover:text-pink-500  font-extralight" variant="link">{t("price.more_than-2000")}</Button>
             </div>
              </div>

              {/* colors */}
              <div className="flex flex-col gap-4">
                <h1 className="text-pink-600  font-bold text-2xl">{t("Colors.title")}</h1>
                <div className="flex gap-2 items-center font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                        <span className="font-extralight ">{t("Colors.black")}</span>
                </div>

                 <div className="flex gap-2 items-center  font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
                        <span className="font-extralight ">{t("Colors.white")}</span>
                </div>

                 <div className="flex gap-2 items-center font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-pink-700 rounded-full"></div>
                        <span className="font-extralight ">{t("Colors.pink")}</span>
                </div>


                 <div className="flex gap-2 items-centerfont-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-purple-700 rounded-full"></div>
                        <span className="font-extralight ">{t("Colors.purple")}</span>
                </div>



                 <div className="flex gap-2 items-center  font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-red-800 rounded-full"></div>
                        <span className="font-extralight ">{t("Colors.red")}</span>
                </div>

                 <div className="flex gap-2 items-center  font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-green-800 rounded-full"></div>
                        <span className="font-extralight ">{t("Colors.green")}</span>
                </div>
              </div>
              {/* tags */}
              <div className="w-full grid grid-cols-2">
                <h1 className="text-pink-600  font-bold text-2xl">{t("brand.title")}</h1>
                {/* <Badge variant="outline" className="px-4 py-3 hover:border hover:border-pink-800 hover:pointer-coarse">{t("brand.fashoin")}</Badge> */}
                {/* <Badge variant="outline" className="px-4 py-3 hover:border hover:border-pink-800 hover:pointer-coarse">{t("brand.lifeStyle")}</Badge> */}
                {/* <Badge variant="outline" className="px-4 py-3 hover:border hover:border-pink-800 hover:pointer-coarse">{t("brand.hazaragi")}</Badge> */}
                {/* <Badge variant="outline" className="px-4 py-3 hover:border hover:border-pink-800 hover:pointer-coarse">{t("brand.crafts")}</Badge> */}
              </div>
            </div>
    )
}