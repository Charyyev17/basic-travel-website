import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar () {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        if(!nav) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "scroll"
        }
    }

    return (
        <div className="absolute flex items-center justify-between p-4 w-full">
            <h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
            <HiMenuAlt3 onClick={handleNav} className="text-white z-20 cursor-pointer" size={25}/>

            <div className={
                nav
                ? "fixed w-full h-screen top-0 left-0 px-4 py-7 bg-black/90 text-gray-300 z-10 ease-in duration-300"
                : "absolute w-full top-0 h-screen left-[-100%] ease-in duration-300 z-10"
            }>
                <ul className="flex flex-col items-center justify-center w-full h-full">
                    <li className="font-bold text-3xl p-8">Home</li>
                    <li className="font-bold text-3xl p-8">Destinations</li>
                    <li className="font-bold text-3xl p-8">Reservations</li>
                    <li className="font-bold text-3xl p-8">Amenities</li>
                    <li className="font-bold text-3xl p-8">Rooms</li>
                </ul>
            </div>
        </div>
    )
}