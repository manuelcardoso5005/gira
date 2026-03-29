import TopHeader from "./TopHeader/TopHeader"
import Navbar from "./Navbar/Navbar"
import Headnews from "./Headnews/Headnews"
import Menu from "../SideMenu/Menu/Menu"

export default function HeaderContent(){
    return (
        <header className="bg-linear-to-b from-neutral-50 via-white to-neutral-50">
            <div className="mx-auto max-w-screen-2xl">
                <TopHeader />
                <Navbar />
            </div>
            <div>
                <Headnews />
            </div>    
        </header>
    )
}