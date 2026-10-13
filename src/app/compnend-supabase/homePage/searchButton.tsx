import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchButton({text , setShowInput , showInput}:{text: string, setShowInput: any , showInput: boolean }){
    return(
        <div className="hover:bg-pink-600 bg-gray-300 dark:text-gray-800 text-xl">
            <Button 
            onClick={()=> setShowInput(!showInput)}
            className={`
            rounded-none bg-gray-300 relative after:-translate-1/2
             after:content[''] after:h-0 after:w-0 after:border-x-[19px] 
             after:border-x-transparent after:border-t-[15px] after:border-t-gray-300 px-6 py-4
              hover:bg-pink-600 hover:after:border-t-pink-600 after:absolute 
              after:-bottom-[15px] after:1/2`} variant="outline">
              
               <Search/> {text}
            </Button>
            
        </div>
    )
}