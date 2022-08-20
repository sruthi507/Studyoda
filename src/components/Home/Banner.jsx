import Image from 'next/image';
import SearchIcon from '../CoreUI/BannerIcons/SearchIcon';

const Banner = () => {
    return (
        <section>
            <div className="banner-bg-red absolute -top-48 -left-20 z-0 w-full h-[594px] rounded-full lg:w-[594px] px-3"></div>
            <div className="banner-bg-violet hidden absolute -top-72 -right-0 z-0 w-[594px] h-[594px] rounded-full lg:block"></div>
            <div className="container px-5 lg:px-0 lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row">
                <Image
                    className="!pt-16 object-contain"
                    src="/Banner/student-img.png"
                    alt="student-img"
                    width={370}
                    height={670}
                />
                <div className="pt-8 lg:pt-36 w-full">
                    <h2 className="banner-heading font-extrabold text-5xl text-stone-800 text-center">
                        Discover the university that suits your dream study in
                        <span className="text-green-500 italic"> Germany</span>
                    </h2>
                    <p className="text-center font-medium text-lg leading-32 pt-8 text-gray-500">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approaches to corporate strategy foster collaborative thinking..
                    </p>
                    <div>
                        <input
                            type="text"
                            name="search"
                            className="relative input-shadow px-[5.5rem] mt-4 lg:mt-0 py-6 w-full h-70 text-sm font-normal text-palm-green-500 bg-transparent focus-visible:outline-none lg:mt-10 lg:text-base rounded-full border border-transparent
                             hover:border-emerald-500 focus:border-emerald-500 placeholder:text-gray-500"
                            value=""
                            placeholder="Type your Universities, Courses, Articles..."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
