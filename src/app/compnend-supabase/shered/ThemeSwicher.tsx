"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwicher({btn_light , btn_dark , btn_system , themeTranslate }: {btn_light: string, btn_dark: string , btn_system: string , themeTranslate : string}){
   const {theme , setTheme} =  useTheme();
  const [mount , setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true);
  },[]);
  if(!mount) return null;
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                
            {theme === 'light' ? <Sun size={18}/> : theme === 'dark' ? <Moon size={18}/> : <SunMoon size={18}/>}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                <DropdownMenuLabel>{themeTranslate}</DropdownMenuLabel>
                    <DropdownMenuItem onClick={()=> setTheme("light")}><div className="flex w-full justify-between">{""}<span>{btn_light}</span><Sun/></div></DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> setTheme("dark")}><div className="flex w-full justify-between">{""}<span>{btn_dark}</span><Moon/></div></DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> setTheme("system")}><div className="flex w-full justify-between">{""}<span>{btn_system}</span><SunMoon/></div></DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}