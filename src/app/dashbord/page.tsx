import DashbordSideBar from "../compnend-supabase/dashbord/dashboed-sidbar";
import DashbordHeader from "../compnend-supabase/dashbord/dashbord-Header";

export default function page(){
    return(
        <div className="w-full flex">
            <DashbordSideBar/>
            <div className="flex-1 h-full w-full bg-white">
                <DashbordHeader/>
                <h1>this is the main</h1>
            </div>
        </div>
    )
}