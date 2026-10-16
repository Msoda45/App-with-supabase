import AddProductForm from "@/app/compnend-supabase/dashbord/addProductForm"
import DashbordSideBar from "@/app/compnend-supabase/dashbord/dashboed-sidbar"
import DashbordHeader from "@/app/compnend-supabase/dashbord/dashbord-Header"
import { useTranslations } from "next-intl"
const metadata = {
    title: "اضافه کردن محصول"
}
function CreadProduct(){
    const t = useTranslations("dashboard.addproduct")
  
    return(
        <div className="w-full h-full">
            <div className="w-full flex">
            <DashbordSideBar/>
           <div className="flex-1 ">
            <DashbordHeader/>
            <div className="py-4 px-9">
            <div className=" w-full p-4 my-4 border rounded-xl">
                <div className="flex flex-col gap-3 my-3">
                    <p className="text-3xl font-bold ">{t("title")}</p>
                    <p className="text-sm text-muted-foreground">{t("desc")}</p>
                </div>
               <AddProductForm/>
            </div>
            </div>
           </div>
           </div>
        </div>
    )
}
export default CreadProduct