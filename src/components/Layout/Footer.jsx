import Footerbg from '../CoreUI/FooterIcons/Footerbg';
import LogoIcon from '../CoreUI/HeaderIcons/LogoIcon';
import FacebookIcon from '../CoreUI/FooterIcons/FacebookIcon';
import InstagramIcon from '../CoreUI/FooterIcons/InstagramIcon';
import TiktakIcon from '../CoreUI/FooterIcons/TiktakIcon';
import GermanCalculatorIcon from '../CoreUI/FooterIcons/GermanCalculatorIcon';
import CreditsCalculatorIcon from '../CoreUI/FooterIcons/CreditsCalculatorIcon';
import CourseComparisonIcon from '../CoreUI/FooterIcons/CourseComparisonIcon';
import UniversityComparisonIcon from '../CoreUI/FooterIcons/UniversityComparisonIcon';
import GooglePlayIcon from '../CoreUI/FooterIcons/GooglePlayIcon';
import AppStoreIcon from '../CoreUI/FooterIcons/AppStoreIcon';

export default function Footer() {
    return (
        <footer className="overflow-hidden items-center -mt-[80px] w-full lg:bg-none">
            <div className=" lg:block hidden absolute z-[-1] w-full">
                <Footerbg />
            </div>
            <div className="bg-indigo-100 w-full h-[2500px] absolute block lg:hidden z-[-1]"></div>
            <div className="container mx-auto z-10 lg:pt-[431px] lg:px-12 lg:py-21px flex flex-col pt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-10 lg:flex-row lg:space-y-0  px-6 lg:px-0 md:text-start lg:text-start mb-11">
                    <div className="flex flex-col w-full space-y-12 lg:space-y-20">
                        <LogoIcon />
                        <p>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                            approaches to corporate strategy foster collaborative thinking..
                        </p>
                        <ul className="flex items-center justify-center lg:justify-start space-x-6">
                            <li className="cursor-pointer">
                                <FacebookIcon />
                            </li>
                            <li className="cursor-pointer">
                                <TiktakIcon />
                            </li>
                            <li className="cursor-pointer">
                                <div className="bg-white p-3 rounded-full shadow-lg">
                                    <InstagramIcon />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:ml-[30px] lg:ml-[75px] text-center md:text-start lg:text-start">
                        <h3 className="font-bold text-lg mb-8 uppercase">Resources</h3>
                        <ul className="w-full lg:w-40 space-y-4 font-semibold text-gray-500">
                            <li className="cursor-pointer">Courses</li>
                            <li className="cursor-pointer">Universities</li>
                            <li className="cursor-pointer">Blogs</li>
                        </ul>
                    </div>
                    <div className="lg:ml-[-76px] text-center md:text-start lg:text-start">
                        <h3 className="font-bold text-lg mb-8 uppercase">Study guid</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li className="cursor-pointer">The German higher education system explained </li>
                            <li className="cursor-pointer">The German higher education system </li>
                            <li className="cursor-pointer">The German higher system explained </li>
                            <li className="cursor-pointer">The German higher education system explained... </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-start lg:text-start">
                        <h3 className="font-bold text-lg mb-8 uppercase">Tools</h3>
                        <ul className="space-y-2 text-gray-500 mx-auto">
                            <li className="footer-tools">
                                <GermanCalculatorIcon />
                                <span>German Grade Calculator</span>
                            </li>
                            <li className="footer-tools">
                                <CreditsCalculatorIcon />
                                <span>ECTS Credits Calculator</span>
                            </li>
                            <li className="footer-tools">
                                <CourseComparisonIcon />
                                <span>Course Comparison</span>
                            </li>
                            <li className="footer-tools">
                                <UniversityComparisonIcon />
                                <span>University Comparison</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-10 lg:flex-row lg:space-y-0  px-6 lg:px-0 text-center md:text-start lg:text-start mb-5 lg:mb-0">
                    <div className="w-full hidden lg:block"> </div>
                    <div className="md:ml-[30px] lg:ml-[75px]">
                        <h3 className="font-bold text-lg mb-8 uppercase">studyoda</h3>
                        <ul className="space-y-4 text-gray-500  font-semibold">
                            <li className="cursor-pointer hover:text-green-400">About Us</li>
                            <li className="cursor-pointer hover:text-green-400">Careers</li>
                            <li className="cursor-pointer hover:text-green-400">FAQ</li>
                            <li className="cursor-pointer hover:text-green-400">Contact Us</li>
                        </ul>
                    </div>
                    <div className="lg:ml-[-76px]">
                        <h3 className="font-bold text-lg mb-8 uppercase">popular courses</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li className="cursor-pointer">Business Management</li>
                            <li className="cursor-pointer">Engineering</li>
                            <li className="cursor-pointer">Humanities</li>
                            <li className="cursor-pointer">Maths and Computer Sciences</li>
                        </ul>
                    </div>
                    <div className="space-y-5 mx-auto md:mx-0">
                        <h3 className="font-bold text-lg mb-8 uppercase">Download Studyoda</h3>
                        <div className="space-y-5 ml-10 md:ml-0 lg:ml-0">
                            <GooglePlayIcon />
                            <AppStoreIcon />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
