import { useTranslations } from "next-intl"
import HeroSection from "../compnend-supabase/homePage/Hero"
import FeatuerSection from "../compnend-supabase/homePage/featuers"
import Catagory from "../compnend-supabase/homePage/catagory"
import FeaturedProducts from "../compnend-supabase/homePage/featured-products"
export const metadata = {
  title: "خانه"
}
export default function HomePage(){
const t =   useTranslations("homepage")
  return(
    <div className="mt-28">
      <HeroSection/>
      <FeatuerSection/>
      <Catagory/>
      <FeaturedProducts/>
    </div>
  )
}
