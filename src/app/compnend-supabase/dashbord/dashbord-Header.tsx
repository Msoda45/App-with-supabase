import { useTranslations } from "next-intl";
import LangaugeSwitcher from "../shered/LanguageSwitcher";
import ThemeSwicher from "../shered/ThemeSwicher";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashbordHeader(){
    const t = useTranslations();
    return(
        <div className=" px-8 py-4 border-b flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <SidebarTrigger />
                <h1>{t("dashboard.header.title")}</h1>
            </div>
            <div className="flex gap-5 items-center">
                <LangaugeSwitcher/>
                <ThemeSwicher 
                 btn_light = {t("navbar.btn_light")} 
                 btn_dark = {t("navbar.btn_dark")} 
                 btn_system = {t("navbar.btn_system")} 
                 themeTranslate = {t("navbar.theme")}
                />
            </div>
        </div>
    )
}