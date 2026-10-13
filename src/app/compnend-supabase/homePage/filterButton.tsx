import { Button } from "@/components/ui/button";
import {ListFilter } from "lucide-react";

export default function FilterButton({showFilter , setShowFilter}: {showFilter : boolean , setShowFilter: any}){
    return(
        <div className="hover:bg-pink-600 bg-gray-300 text-gray-600">
                  <Button 
            onClick={()=> setShowFilter(!showFilter)}
            className={`
            rounded-none bg-gray-300 relative after:translate-1/2 transition-all duration-200 after:-translate-1/2
             after:content[''] after:h-0 after:w-0 after:border-x-[18px] hover:bg-pink-600
             after:border-x-transparent   after:border-t-[17px] after:border-t-gray-300 px-6 py-4
               hover:after:border-t-pink-600 after:absolute 
              after:-bottom-[19px] after:1/2`} variant="outline">
              
               <ListFilter/> Filter
            </Button>
           
        </div>
    )
}