import { Button } from "@/components/ui/button";
import ThemeSwicher from "./ThemeSwicher";
import LangaugeSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { LogIn } from "lucide-react";

export default function Navbar(){
   const t =  useTranslations("navbar");
    return(
        <div className="w-full border-b-gray-500 shadow-2xs border fixed top-0 left-0 backdrop-blur-md py-4 px-8 flex justify-between items-center">
           <div>
            <h1 className="text-2xl font-bold text-pink-800 ">{t("logo")}</h1>
           </div>
           <div className="flex items-center gap-4">
            <ThemeSwicher btn_light = {t("btn_light")} btn_dark = {t("btn_dark")} btn_system = {t("btn_system")} themeTranslate = {t("theme")}/>
            <LangaugeSwitcher/>
            <Button>
                <LogIn size={18}/>
                {t("btn_login")}</Button>
           </div>
        </div>
    )
}