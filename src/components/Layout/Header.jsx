import LogoIcon from '../CoreUI/HeaderIcons/LogoIcon';
import WebIcon from '../CoreUI/HeaderIcons/webIcon';
import WebDownArrowIcon from '../CoreUI/HeaderIcons/WebDownArrowIcon';
import { useState } from 'react';

const Header = () => {
    const Links = [
        { name: 'Courses', link: '/' },
        { name: 'Universities', link: '/' },
        {
            name: 'Features',
            submenu: 'true',
            sublinks: [
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
            ],
            link: '/',
        },
        {
            name: 'Tools',
            submenu: 'true',
            sublinks: [
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
            ],
            link: '/',
        },
        {
            name: 'Resources',
            submenu: 'true',
            sublinks: [
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
                { name: 'submenu', link: '/' },
            ],
            link: '/',
        },
    ];

    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    // const changeBackground = () =>{
    //     if(window.scrollY >= 90){
    //         setNavbar(true);
    //     }else{
    //         setNavbar(false)
    //     }
    //     console.log (window.scrollY);
    // }

    // window.addEventListener('scroll',changeBackground);
    return (
        <nav className="shadow-sm w-full sticky z-50 top-0 header-bg-transparent">
            <header className="lg:px-12 lg:py-21px xl:px-12 xl:py-21px space-x-8 flex justify-between items-center py-1 px-5 container mx-auto">
                <div>
                    <LogoIcon />
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-3 top-3 cursor-pointer lg:hidden block"
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className="flex space-x-8">
                    <div className=" flex">
                        <ul
                            className={`lg:flex items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-transparent lg:space-x-9 lg:z-auto -z-1 left-0 w-full lg:w-auto lg:px-0 px-4 lg:pl-0
                ${open ? 'top-20 opacity-100' : '-top-[490px] lg:opacity-100 opacity-0'}`}
                        >
                            {Links.map((link) => (
                                <li
                                    key={link.name}
                                    className="flex items-center space-x-2 md:ml-4 text-base font-bold my-7 md:my-7"
                                >
                                    <a href={link.link} className="text-gray-800">
                                        {link.name}
                                    </a>
                                    <WebDownArrowIcon />
                                </li>
                            ))}
                            <li className="lg:flex items-center space-x-3 hidden">
                                <WebIcon />
                                <span className="cursor-pointer text-slate-600 font-light text-base tracking-wide">
                                    English
                                </span>
                                <WebDownArrowIcon />
                            </li>
                            <li>
                                <button className="text-pink-500 bg-white w-full lg:w-auto py-4 mb-7 lg:mb-0 px-8 text-sm font-bold leading-3 rounded-2xl shadow-md shadow-pink-200 hover:shadow-md hover:shadow-pink-100">
                                    LogIn
                                </button>
                            </li>
                            <li>
                                <button className="bg-pink-500 text-white  w-full lg:w-auto py-4 px-7 text-sm font-bold leading-3 rounded-2xl hover:shadow-md hover:shadow-pink-100">
                                    Signup
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Header;
