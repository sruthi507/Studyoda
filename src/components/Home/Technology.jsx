import Image from 'next/image';
import RightArrowIcon from '../CoreUI/GlobalSearchIcons/RightArrowIcon';

const Technology = () => {
    return (
        <section className="container mx-auto lg:max-w-screen-xl my-12 p-5 lg:my-12">
            <div className="bg-teal-50 text-center py-16 lg:py-[80px] lg:px-20 lg:space-x-20 mb-4 relative rounded-[50px] lg:flex">
                <div className="w-auto lg:w-1/2 mx-4 lg:mx-0">
                    <Image
                        className="object-cover rounded-xl"
                        src="/Technology/frame-img.png"
                        alt="frame-img"
                        width={625}
                        height={454}
                    />
                </div>
                <div className="w-auto lg:w-1/2 lg:text-start mt-14">
                    <h4 className="font-extrabold text-base text-green-500 uppercase mb-4 lg:mb-1">Global search</h4>
                    <h2 className="font-extrabold text-zinc-800 text-[40px] leading-[50px] mb-1">
                        Best searching
                        <br />
                        technology
                    </h2>

                    <p className="font-medium text-normal text-global-search-discription-bg leading-30 mb-10">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approaches to corporate strategy foster collaborative thinking..
                    </p>
                    <button className="bg-green-500 px-8 py-4 mx-auto lg:mx-0 flex items-center space-x-3 rounded-2xl hover:shadow-md hover:shadow-green-300">
                        <span className="text-white text-base">Go to search</span>
                        <RightArrowIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Technology;
