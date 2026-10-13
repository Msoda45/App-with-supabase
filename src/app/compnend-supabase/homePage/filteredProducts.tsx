import { Button } from "@/components/ui/button";

export default function FilteredProducts({showFilter}:{showFilter: boolean}){
    return(
         <div className={`w-full ${showFilter ? 'block' : 'hidden'} h-fit mb-4 rounded-md  bg-gray-300 grid grid-cols-4 w-full gap-8 p-12`}>
              {/* sortby */}
              <div>
                <h1 className="text-pink-900  font-bold text-2xl">Sort By</h1>
                <div className="flex flex-col items-start gap-3 bg">
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">Defult</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">Popularity</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">Newness</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">PRICE: Low To High</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">PRICE: High To Low</Button>
                </div>
              </div>
              {/* price */}
              <div className="">
                <h1 className="text-pink-900  font-bold text-2xl">Price</h1>
                {/* buttons */}
                <div className="flex flex-col gap-3 items-start">
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">All</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">300-600</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">600-1000</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">1000-2500</Button>
                <Button className="hover:text-pink-600 text-gray-600 font-extralight" variant="link">More Than 2500</Button>
             </div>
              </div>

              {/* colors */}
              <div className="flex flex-col gap-4">
                <h1 className="text-pink-900  font-bold text-2xl">Colors</h1>
                <div className="flex gap-2 items-center text-gray-600 font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                        <span className="font-extralight ">Black</span>
                </div>

                 <div className="flex gap-2 items-center text-gray-600 font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
                        <span className="font-extralight ">White</span>
                </div>

                 <div className="flex gap-2 items-center text-gray-600 font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-pink-700 rounded-full"></div>
                        <span className="font-extralight ">Pink</span>
                </div>


                 <div className="flex gap-2 items-center text-gray-600 font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-purple-700 rounded-full"></div>
                        <span className="font-extralight ">Purple</span>
                </div>



                 <div className="flex gap-2 items-center text-gray-600 font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-red-800 rounded-full"></div>
                        <span className="font-extralight ">Red</span>
                </div>

                 <div className="flex gap-2 items-center text-gray-600 font-extralight hover:text-pink-600">
                    <div className="w-4 h-4 bg-green-800 rounded-full"></div>
                        <span className="font-extralight ">green</span>
                </div>
              </div>
              {/* tags */}
              <div className="w-full grid grid-cols-2">
                {/* <Badge variant="outline" className="px-4 py-3 hover:border hover:border-pink-800 hover:pointer-coarse">Fashoin</Badge> */}
              </div>
            </div>
    )
}