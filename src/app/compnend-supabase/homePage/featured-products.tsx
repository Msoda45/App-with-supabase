"use client"
import { Button } from "@/components/ui/button"
import ProductCard from "./productCard"
import SearchButton from "./searchButton"
import { useTranslations } from "next-intl"
import FilterButton from "./filterButton"
import { useState } from "react"
import FilteredProducts from "./filteredProducts"

export default function FeaturedProducts(){
    const [showInput , setShowInput] = useState(false);
    const [showFilter , setShowFilter] = useState(false);
    const t = useTranslations("homepage.products")
    const productsList: {id:number , name: string , price: number , image: string}[] = [
        {
            id: 1,
            name: "Classic MotoreCicle Cup",
            price: 300,
            image: "/images/cups/c1.png.png"
        },
        {
            id: 2,
            name: "Modern Pants",
            price: 500,
            image: "/images/man-cloth/p4.png.png"
        },
        {
            id: 3,
            name: "Classic Trench Coat",
            price: 500,
            image: "/images/woman-cloth/p3.png.png"
        },
        {
            id: 4,
            name: "The New Brand Shoes",
            price: 800,
            image: "/images/woman-shoes/sw1.png.png"
        },
    ]
    return(
        <div className="w-full max-w-6xl mx-auto">
           <h1 className="">{t("title")}</h1>
          <div className="w-full flex justify-between">
            <div className="my-6 flex space-x-4">
                <Button variant="link">{t("categories.all-products")}</Button>
                <Button variant="link">{t("categories.man")}</Button>
                <Button variant="link">{t("categories.woman")}</Button>
                <Button variant="link">{t("categories.shoes")}</Button>
                <Button variant="link">{t("categories.watches")}</Button>
            </div>
            <div className="flex gap-4 items-center">
                <SearchButton 
                text ={t("categories.search")}
                showInput = {showInput}
                setShowInput={setShowInput}
                />
                <FilterButton
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                />
            </div>
            <div className="w-full">
                <FilteredProducts showFilter = {showFilter}/> 
            </div>
          </div>
           <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsList.map((product)=>(
                <ProductCard product = {product} key={product.id}/>
            ))}
           </div>
        </div>
    )
}