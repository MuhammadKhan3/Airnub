import NavigationMenu from "../../components/navigationMenu";
import Property from "../../components/property";
import Header from "./header";


const Home=()=>{
    return (
    <div className="flex flex-col">
        <Header/>
        <NavigationMenu/>
        <Property/>
    </div>
        )
}
export default Home;