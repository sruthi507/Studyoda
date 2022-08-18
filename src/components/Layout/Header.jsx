import LogoIcon from '../CoreUI/HeaderIcons/LogoIcon';
import MenuIcon from '../CoreUI/HeaderIcons/MenuIcon';
import DownArrowIcon from '../CoreUI/HeaderIcons/DownArrowIcon';
import WebIcon from '../CoreUI/HeaderIcons/webIcon';

export default function Header() {
    return (
        <div className="shadow-sm bg-transparent w-full fixed top-0 left-0">
            <header className=" lg:px-12 lg:py-21px xl:px-12 xl:py-21px md:flex bg-transparent md:px-10 space-x-8 flex justify-between items-center py-6 px-5">
                <div>
                    <LogoIcon />
                </div>
                <div className="flex space-x-8">
                    <div className=" flex">
                        <ul className="flex space-x-8 items-center">
                            <li className="nav-menu">Courses</li>
                            <li className="nav-menu">Universities</li>
                            <li className="flex items-center space-x-3">
                                <span className="nav-menu">Features</span>
                                <DownArrowIcon />
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="nav-menu">Tools</span>
                                <DownArrowIcon />
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="nav-menu">Resources</span>
                                <DownArrowIcon />
                            </li>
                            <li className="flex items-center space-x-3">
                                <WebIcon />
                                <span className="text-slate-600 font-light text-base tracking-wide">English</span>
                                <DownArrowIcon />
                            </li>
                            <li>
                                <button className="text-pink-500 bg-white py-4 px-8 text-sm font-bold leading-3 rounded-2xl shadow-md shadow-pink-200">
                                    Login
                                </button>
                            </li>
                            <li>
                                <button className="bg-pink-500 text-white py-4 px-7 text-sm font-bold leading-3 rounded-2xl">
                                    Signup
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}
