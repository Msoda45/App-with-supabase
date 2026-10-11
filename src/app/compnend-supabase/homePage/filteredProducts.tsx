import { Button } from "@/components/ui/button";

export default function FilteredProducts({showFilter}:{showFilter: boolean}){
    return(
         <div className={`w-full ${showFilter ? 'block' : 'hidden'} h-fit grid grid-cols-4 w-full gap-8 bg-gray-300 p-12`}>
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
    )
}