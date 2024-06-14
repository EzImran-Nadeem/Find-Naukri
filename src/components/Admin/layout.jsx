import { useState } from "react"
import { Link } from "react-router-dom";






const Layout = ({children}) => {
    const [size, setSize] = useState(280)
    const [accountMenu, setAccountMenu] = useState(false)

    const menus = [
        {
            label: 'Feed',
            icon: '#',
            Link: '/feed'
        },
        {
            label: 'Hackathon',
            icon: '',
            Link: '/Hackeathon'
        },
        {
            label: 'Intership',
            icon: '',
            Link: '/intership'
        },
        {
            label: 'Fresher',
            icon: '',
            Link: '/Fresher'
        },
        {
            label: 'Experience',
            icon: '',
            Link: '/Experience'
        },
        {
            label: 'Ask For Refer',
            icon: '',
            Link: '/Ask-For-Refer'
        },
        
    ]
    return (
        <div>
            <aside
                className="bg-gray-300 fixed top-0 left-0 shadow-lg h-full"
                style={{
                    width: size,
                    transition: '0.3s'
                }}
            >
                <div className="flex flex-col overflow-hidden justify-item-center border">
                    {
                        menus.map((item, index) => (
                       
                            < Link 
                                 key={index}
                            to = { item.Link } className = "px-4 py-3 text-bold text-blue-800 hover:bg-slate-200" > { item.label }</Link>
                ))
                  }


        </div>
            </aside >
    <section
        className="bg-gray-100 h-full"
        style={{
            marginLeft: size,
            transition: '0.3s'
        }}>



        <nav className="bg-white p-6 shadow sticky top-0 overflow-hidden flex items-center justify-between">
            <div className="flex gap-4  items-center">
                <button
                    className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                    onClick={() => setSize(size === 280 ? 0 : 280)}
                >
                    <i className="ri-menu-2-line text-xl"></i>
                </button>
                <h1 className="text-md font-semibold text-red-900"> Find-Naukri</h1>




            </div>
            <div className="flex gap-4">
                <div className=" flex p-3 gap-4 left-[90 ] ">
                    <button
                        className="bg-gray-50 right-20  hover:bg-indigo-600 hover:text-white w-8 h-8">

                        <i className="  ri-notification-3-line "></i>
                    </button> <button className="bg-gray-50  hover:bg-indigo-600 hover:text-white w-8 h-8"
                    >
                        <i className="ri-mail-send-line "></i> </button>   </div>
                <button className="relative">
                    <img
                        src="./images/avt.avif"
                        className="w-10 h-10 rounded-full"
                        onClick={() => setAccountMenu(!accountMenu)}
                    />
                    {
                        accountMenu &&
                        <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                            <div>
                                <h1 className="text-lg font-semibold">Imran Nadeem</h1>
                                <p className="text-gray-500">example@gmail.com</p>
                                <div className="h-px bg-gray-200 my-4" />
                                <button>
                                    <i className="ri-logout-circle-r-line mr-2"></i>
                                    Logout
                                </button>
                            </div>
                        </div>
                    }
                </button>
            </div>
        </nav>
        <div className="">
            <div className="w-fit  h-8 flex m-auto items-center justify-center rounded-md py-6 px-3 bg-blue-600">
            <h1 className="text-lg  text-slate-300 font-semibold">
                Job-Seekers
            </h1>

            </div>
            {children}
        </div>
        <div className="h-full m-7 ">

<footer>This is Portfolio Website Made by Imran Nadeem 
    <Link
    to="https://github.com/EzImran-Nadeem"
     > GITHUB
    </Link>
</footer>
        </div>
    </section>
    
        </div >
)
}

export default Layout