"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LangaugeSwitcher(){
   const router =  useRouter();
  const [pending , startTransition] =  useTransition();
    function ChangeLanguage(locale: string){
        document.cookie = `locale=${locale};path=/;max-age=7776000`;
        startTransition(()=>{
            router.refresh();
        })
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                 <Languages size={18}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Language</DropdownMenuLabel>
                    <DropdownMenuItem onClick={()=> ChangeLanguage("fa")}>دری</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> ChangeLanguage("en")}>  English</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> ChangeLanguage("pa")}>پشتو</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}