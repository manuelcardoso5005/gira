import TopHeader from "./TopHeader/TopHeader"
import Navbar from "./Navbar/Navbar"
import Headnews from "./Headnews/Headnews"

export default function HeaderContent(){
    return (
        <header className="bg-linear-to-b from-neutral-50 via-white to-neutral-50">
            <div className="mx-auto max-w-screen-2xl">
                <TopHeader />
            </div>
            <Navbar />
            <Headnews />
        </header>
    )
}