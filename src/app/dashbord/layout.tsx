import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export const metadata = {
    title: "دشبورد"
}
async  function DashbordLayout({children}:{children: React.ReactNode}){
    const cookiesInfo = await cookies();
   const locale =  cookiesInfo.get("locale")?.value || "fa" 
    return(
        <div className="w-full h-full bg-white">
            <SidebarProvider dir={locale === "en"? "ltr": "rtl" }>
            {children}
            </SidebarProvider>
        </div>
    )
}
export default DashbordLayout