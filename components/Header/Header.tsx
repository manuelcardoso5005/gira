import TopHeader from "./_components/TopHeader/TopHeader"
import Navbar from "./_components/Navbar/Navbar"
import Headnews from "./_components/Headnews/Headnews"
import Menu from "../Menu/Menu"

export default function HeaderContent(){
    return (
        <header className="bg-linear-to-b from-neutral-50 via-white to-neutral-50">
            <div className="max-w-screen-2xl mx-auto">
                <TopHeader />
                <Navbar />
                <Headnews />
            </div>
        </header>
    )
}