import { useState } from 'react';
import Button from '../Button';


export default function Navbar() {
    const Links = [
        {name:"Courses",link:"/"},
        {name:"Universities",link:"/"},
        {name:"Features ",link:"/"},
        {name:"Tools",link:"/"},
        {name:"Resources",link:"/"},
    ];

    const [open,setOpen]=useState(false);
    return (
        <div className="shadow-md w-full sticky top-0 left-0">
            <nav className="md:flex items-center justify-between bg-white py-4 px-7 md:px-10">
                <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    <div>Designer</div>
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name = {open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto -z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                ${open ? 'top-16 opacity-100' : '-top-[490px] md:opacity-100 opacity-0'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>
                        Get started
                    </Button>
                </ul>
            </nav>
        </div>
);
}
