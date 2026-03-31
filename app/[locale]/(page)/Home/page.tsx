
import SectionNews from "@/components/SectionHome/SectionNews/SectionNews";
import SectionGames from "@/components/SectionHome/SectionGames/SectionGames";

export default function HomeContent (){
    return (
        <div className=""> 
            <div className="mx-auto mt-8 max-w-screen-2xl">
                <SectionNews />
                <div className="p-4 shadow-lg x-auto bg-linear-to-r from-gray-200 via-gray-100 to-gray-50 md:rounded-2xl">
                    <SectionGames />
                </div>
            </div>      
        </div>  
    )
}