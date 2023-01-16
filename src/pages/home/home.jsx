import HomeHeader from "./homeHeader";
import NavigationMenu from "../../components/navigationMenu";
import Property from "../../components/property";
import Header from "../../components/header";
import HomeContent from "./homeContent";


const Home=()=>{
    return (
    <div className="flex flex-col relative h-screen w-full ">
       <HomeHeader/>
       <HomeContent/>
    </div>
        )
}
export default Home;