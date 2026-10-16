"use client";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { useLocale, useTranslations } from "next-intl"

export default function AddProductForm(){
      const locale = useLocale();
        const t = useTranslations("dashboard.addproduct");
    return(
        <div>
             <form action="" className="w-full grid grid-cols-2 gap-4">
                <div className="gap-2 grid">
                    <Label>{t("lables.name")}</Label>
                    <Input type="text" name="name"/>
                    </div>
                    <div className=" grid gap-2">
                        <Label>{t("lables.price")}</Label>
                    <div className="relative">
                    <Input type="number"  name=""/>
                    <div className={` bg-white dark:bg-black absolute top-1/2 -translate-y-1/2 ${locale == "en"? "right-2": "left-2"}`}>{locale == "en" ? "AFG":"افغانی"}</div>
                    </div>
                    </div>

                    <div className="gap-2 grid">
                    <Label>{t("lables.size")}</Label>
                    <Input type="text" name="size"/>
                    </div>

                    <div className="gap-2 grid">
                    <Label>{t("lables.brand")}</Label>
                    <Input type="text" name="brand"/>
                    </div>

                      <div className="gap-2 grid">
                    <Label>{t("lables.qty")}</Label>
                    <Input type="text" name="qty"/>
                    </div>

                      <div className="gap-2 grid">
                    <Label>{t("lables.alert_qty")}</Label>
                    <Input type="text" name="alert_qty"/>
                    </div>
                </form>
        </div>
    )
}