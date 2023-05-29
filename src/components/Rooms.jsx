export default function Rooms () {

    return (
        <div className="max-w-[1400px] h-[500px] bg-gray-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-6 grid lg:grid-cols-3 gap-4">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2">
                <h3 className="text-4xl font-bold">Fine Interior Rooms</h3>
                <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, natus! Possimus repellendus quos quod et.</p>
                <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, autem.</p>
                <button className="border-black mt-4 hover:shadow-xl hover:scale-105 ease-in duration-150">
                    Learn More
                </button>
            </div>

            <div className="grid grid-cols-2 col-span-2 gap-2">
                <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt=""/>
                <img className="object-cover w-full h-full row-span-2" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt=""/>
                <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt=""/>
            </div>
        </div>
    )
}