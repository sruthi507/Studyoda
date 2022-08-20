import Image from 'next/image';
import RightArrowIcon from '../CoreUI/GlobalSearchIcons/RightArrowIcon';
import GroupIcons from '../CoreUI/CalculatorIcons/GroupIcons';
import RectangleIcon from '../CoreUI/CalculatorIcons/RectangleIcon';
import CircleIcon from '../CoreUI/CalculatorIcons/CircleIcon';
import PolygonIcon from '../CoreUI/CalculatorIcons/PolygonIcon';
import SIngleIcon from '../CoreUI/CalculatorIcons/SingleIcon';
import CloseIcon from '../CoreUI/CalculatorIcons/CloseIcon';

const calculator = () => {
    return (
        <section className="container mx-auto lg:max-w-screen-xl my-16 px-5 lg:my-28">
            <div className="bg-pink-50 text-center py-[80px] mb-4 relative rounded-[50px]">
                <h4 className="font-extrabold text-base text-pink-400 uppercase mb-4">Tools</h4>
                <h1 className="font-extrabold text-[40px] mb-3">German Grade Calculator</h1>
                <p className="font-medium text-base text-calculator-discription-color text-center lg:mx-64 mx-9 mb-7">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                    approaches to corporate strategy foster collaborative thinking..
                </p>
                <Image
                    className="object-cover"
                    src="/Calculator/frame-img.jpg"
                    alt="frame-img"
                    width={787}
                    height={502}
                />
                <button className="bg-violet-500 px-8 py-4 flex mx-auto lg:mb-0 items-center text-center space-x-3 rounded-2xl hover:shadow-md hover:shadow-violet-300">
                    <span className="text-white text-base">View More</span>
                    <RightArrowIcon />
                </button>
                <div className="hidden lg:block absolute top-16 left-32 opacity-50 calculator-animation">
                    <GroupIcons />
                </div>
                <div className="hidden lg:block absolute top-6 left-96 opacity-50 calculator-animation">
                    <RectangleIcon />
                </div>
                <div className="hidden lg:block absolute top-9 left-[910px] opacity-50 calculator-animation">
                    <CloseIcon />
                </div>
                <div className="hidden lg:block absolute top-24 right-20 opacity-50 calculator-animation">
                    <CircleIcon />
                </div>
                <div className="hidden lg:block absolute top-72 left-24 opacity-50 calculator-animation">
                    <PolygonIcon />
                </div>
                <div className="hidden lg:block absolute top-[514px] right-20 opacity-50 calculator-animation">
                    <SIngleIcon />
                </div>
            </div>
        </section>
    );
};

export default calculator;
