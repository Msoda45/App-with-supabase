
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutDashboard, LogOut, MessageCircle, ShoppingBasket, ShoppingCart, ShoppingCartPlus } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import Link from "next/link";

async function DashbordSideBar(){
    const t = await getTranslations("dashboard.sidebar")
   const cookiesInfo =  await cookies();
   const locale = cookiesInfo.get("locale")?.value || "fa";
    return(
        <div>
            <Sidebar side={locale === "en"? "left": "right"}>
                <SidebarHeader>
                    <div className="w-full text-pink-600 text-3xl font-semibold gap-1.5 py-4 flex justify-center items-center">
                        <LayoutDashboard size={26}/>
                        <h1 className=" font-bold  text-center">{t("title")}</h1>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                   <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                         <SidebarMenu>
                        <SidebarMenuButton><LayoutDashboard/>{t("title")}</SidebarMenuButton>
                    </SidebarMenu>
                    </SidebarGroupContent>
                   </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel>{t("products.title")}</SidebarGroupLabel>
                        <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuButton className="hover:text-pink-600 hover:cursor-pointer">
                                <ShoppingCart/>
                               <h1>{t("products.all")}</h1>
                            </SidebarMenuButton>
                        </SidebarMenu>

                           <SidebarMenu>
                            <SidebarMenuButton className="hover:text-pink-600 font-heading hover:cursor-pointer">
                                <ShoppingCartPlus/>
                                {t("products.insert")}
                            </SidebarMenuButton>
                        </SidebarMenu>


                           <SidebarMenu>
                            <Link href="/">
                            <SidebarMenuButton className="hover:text-pink-600 hover:cursor-pointer">
                                <ShoppingBasket/>
                              {t("products.manege")}
                            </SidebarMenuButton>
                            </Link>
                        </SidebarMenu>
                     </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel>{t("feedback.title")}</SidebarGroupLabel>
                         <SidebarGroupContent>
                        <SidebarMenu>
                            <Link href="/">
                            <SidebarMenuButton className="hover:text-pink-600 hover:cursor-pointer">
                                <MessageCircle/>
                              {t("feedback.manege")}
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                     <div className="w-full flex items-center justify-between">
                        <div className="grid grid-cols-1 text-xs">
                            <span>M.soda</span>
                            <span className="hover:underline hover:text-pink-600 transition-all duration-200 text-gray-700">msoda@gamil.com</span>
                        </div>
                        <LogOut size={18}/>
                     </div>
                </SidebarFooter>
            </Sidebar>
        </div>
    )
}

export default DashbordSideBar