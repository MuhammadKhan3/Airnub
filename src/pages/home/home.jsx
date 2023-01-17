import HomeHeader from "./homeHeader";
import NavigationMenu from "../../components/navigationMenu";
import Property from "../../components/property";
import Header from "../../components/header";
import HomeContent from "./homeContent";

const Home=()=>{
    return (
    <div className="flex flex-col relative h-screen w-full ">
      {/* <div className="mb:hidden">
      </div>
      <div> */}
        <HomeHeader/>
       <HomeContent/>
      {/* </div> */}


    </div>
        )
}
export default Home;