import { Button } from "@/components/ui/button";
import {ListFilter } from "lucide-react";
import { useState } from "react";

export default function FilterButton(){
    const [showInput , setShowInput] = useState(false);
    return(
        <div>
                  <Button 
            onClick={()=> setShowInput(!showInput)}
            className={`
            rounded-none bg-gray-300 relative after:-translate-1/2
             after:content[''] after:h-0 after:w-0 after:border-x-[15px] 
             after:border-x-transparent after:border-t-[15px] after:border-t-gray-300 px-5
              hover:bg-pink-600 hover:after:border-t-pink-600 after:absolute 
              after:-bottom-[15px] after:1/2`} variant="outline">
              
               <ListFilter/> Filter
            </Button>
            <div className="w-full h-fit grid grid-cols-4 gap-8 bg-gray-300 p-12">
              {/* sortby */}
              <div>
                <h1>Sort By</h1>
                <Button className="hover:text-pink-600" variant="link">Defult</Button>
                <Button className="hover:text-pink-600" variant="link">Popularity</Button>
                <Button className="hover:text-pink-600" variant="link">Newness</Button>
                <Button className="hover:text-pink-600" variant="link">PRICE: Low To High</Button>
                <Button className="hover:text-pink-600" variant="link">PRICE: High To Low</Button>
                
              </div>
              {/* price */}
              <div>
                <h1>Price</h1>
                {/* buttons */}
                <Button className="hover:text-pink-600" variant="link">All</Button>
                <Button className="hover:text-pink-600" variant="link">300-600</Button>
                <Button className="hover:text-pink-600" variant="link">600-1000</Button>
                <Button className="hover:text-pink-600" variant="link">1000-2500</Button>
                <Button className="hover:text-pink-600" variant="link">More Than 2500</Button>
              </div>
            </div>
        </div>
    )
}