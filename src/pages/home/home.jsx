import HomeHeader from "./homeHeader";
import NavigationMenu from "../../components/navigationMenu";
import Property from "../../components/property";
import Header from "../../components/header";
import HomeContent from "./homeContent";
import BottomNavigation from "../../components/bottomNavigation";
const Home=()=>{
    return (
    <div className="flex flex-col relative h-screen bg-blue-300  mb:h-[82.7vh]   w-full" >
        <HomeHeader/>
        {/* <HomeContent/>         */}
        {/* <div className="mt-4"> */}
          {/* <BottomNavigation/> */}
        {/* </div> */}
    </div>
        )
}
export default Home;