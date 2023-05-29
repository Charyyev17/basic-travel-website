export default function Hero () {

    return (
        <div className="w-full h-screen">
            <img className="w-full h-screen top-0 left-0 object-cover" alt="" src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"/>
            <div className="bg-black/30 w-full h-screen absolute top-0 left-0" />

            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className="absolute md:left-[10%] max-w-[1100px] m-auto p-4">
                    <p>All Inclusive</p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Private Beaches & Getaways</h1>
                    <p className="max-w-[600px] drop-shadow-2xl py-4 text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui temporibus assumenda ducimus blanditiis, aliquam quisquam eos saepe repudiandae nesciunt quaerat!</p>
                    <button className="bg-transparent text-white border-white font-bold hover:bg-white hover:text-black hover:scale-105 duration-200">Reserve Now</button>
                </div>
            </div>
        </div>
    )
}