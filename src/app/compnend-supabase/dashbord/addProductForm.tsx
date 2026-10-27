"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { useLocale, useTranslations } from "next-intl"
import { useState } from "react";

export default function AddProductForm(){
    const [showMoreColors , setShowMoreColors] = useState(false);
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

                      <div className="gap-2 grid">
                    <Label>{t("lables.alert_qty")}</Label>
                    <Input type="text" name="alert_qty"/>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <h1 className="text-xl text-center flex items-center justify-center font-semibold text-pink-700">{t("lables.Colors.title")}</h1>
                        <div className="flex gap-1 mt-9 items-center">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-white bg-black rounded-full"></div>
                                <Label htmlFor="black">{t("lables.Colors.black")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="black"
                            value="black"
                            />
                        </div>

                          <div className="flex gap-1 mt-9 items-center">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-black border border-black bg-white rounded-full"></div>
                                <Label htmlFor="white">{t("lables.Colors.white")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="white"
                            value="white"
                            />
                        </div>

                          <div className="flex gap-1 mt-9 items-center">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-white bg-purple-600 rounded-full"></div>
                                <Label htmlFor="purple">{t("lables.Colors.purple")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="purple"
                            value="purple"
                            />
                        </div>


                          <div className="flex gap-1 mt-9 items-center">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-white bg-red-600 rounded-full"></div>
                                <Label htmlFor="red">{t("lables.Colors.red")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="red"
                            value="red"
                            />
                        </div>

                                 <div className={`${showMoreColors? 'flex': 'hidden'}flex gap-1 mt-9 items-center`}>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-black border bg-gray-500 rounded-full"></div>
                                <Label htmlFor="gray">{t("lables.Colors.gray")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="gray"
                            value="gray"
                            />
                        </div>


                                     <div className={`${showMoreColors? 'flex': 'hidden'}flex gap-1  items-center`}>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-black border  bg-amber-900 rounded-full"></div>
                                <Label htmlFor="brown">{t("lables.Colors.brown")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="brown"
                            value="brown"
                            />
                        </div>


                                <div className={`${showMoreColors? 'flex': 'hidden'}flex gap-1 items-center`}>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-black border  bg-blue-500 rounded-full"></div>
                                <Label htmlFor="blue">{t("lables.Colors.blue")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="blue"
                            value="blue"
                            />
                        </div>          
                                                          <div className={`${showMoreColors? 'flex': 'hidden'}flex gap-1 items-center`}>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-black border bg-yellow-500 rounded-full"></div>
                                <Label htmlFor="yellow">{t("lables.Colors.yellow")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="yellow"
                            value="yellow"
                            />
                                           </div>

                                                   <div className={`${showMoreColors? 'flex': 'hidden'}flex gap-1 items-center`}>
                            <div className="flex gap-1">
                                <div className="w-4 h-4 dark:border dark:border-black border  bg-amber-600 rounded-full"></div>
                                <Label htmlFor="orenge">{t("lables.Colors.orenge")}</Label>
                            </div>
                            <Checkbox 
                            name="color"
                            id="orenge"
                            value="orenge"
                            />
                        </div>
                    
                            <Button>more color</Button>
                    </div>
                </form>
        </div>
    )
}