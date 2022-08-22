import RightArrowIcon from '../CoreUI/GlobalSearchIcons/RightArrowIcon';
import Image from 'next/image';

const GlobalSearch = () => {
    return (
        <section className="container mx-auto lg:max-w-screen-xl my-16 lg:my-28">
            <div className="bg-global-search-bg lg:flex lg:justify-between py-10 lg:py-20 mx-3 px-5 lg:px-20 lg:space-x-24 rounded-[50px]">
                <div className="w-auto lg:w-1/2 lg:text-start mt-14">
                    <h4 className="font-extrabold text-base text-violet-500 uppercase mb-4 lg:mb-1">Global search</h4>
                    <h2 className="font-extrabold text-zinc-800 text-[40px] leading-[50px] mb-1">
                        Best searching
                        <br />
                        technology
                    </h2>

                    <p className="font-medium text-normal text-global-search-discription-bg leading-30 mb-10">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approaches to corporate strategy foster collaborative thinking..
                    </p>
                    <button className="bg-violet-500 px-8 py-4 flex mb-20 lg:mb-0 items-center space-x-3 rounded-2xl hover:shadow-md hover:shadow-violet-300">
                        <span className="text-white text-base">Go to search</span>
                        <RightArrowIcon />
                    </button>
                </div>
                <div className="w-auto lg:w-1/2 flex justify-center">
                    <Image
                        className="images/object-contain"
                        src="/globalSearch/global-search-img.png"
                        alt="frame-img"
                        width={565}
                        height={454}
                    />
                </div>
            </div>
        </section>
    );
};

export default GlobalSearch;
