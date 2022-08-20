import EasyBlueIcon from '../CoreUI/EasySection/EasyBlueIcon';
import EasyLightIcon from '../CoreUI/EasySection/EasyLightIcon';

const EasySection = () => {
    return (
        <div>
            <section className="container mx-auto lg:max-w-screen-xl flex lg:flex-row lg:justify-between flex-col my-24 px-5 lg:my-28">
                <div className="w-[342px] lg:text-start my-6 lg:my-0">
                    <div className="flex items-center space-x-5">
                        <div className="bg-sky-500 p-9 rounded-[29px] relative w-[73px] h-[73px] shadow-lg shadow-blue-200 cursor-pointer">
                            <EasyBlueIcon />
                        </div>
                        <h3 className="font-bold text-xl text-stone-800">Easy to access</h3>
                    </div>
                    <p className="text-base font-medium text-slate-500 pt-3 lg:pt-7">
                        Our prices are lower than booking with University directly
                    </p>
                </div>
                <div className="w-[342px]  lg:text-start my-6 lg:my-0">
                    <div className="flex items-center space-x-5">
                        <div className="bg-violet-500 p-9 rounded-[29px] relative w-[73px] h-[73px] shadow-lg shadow-violet-200 cursor-pointer">
                            <EasyBlueIcon />
                        </div>
                        <h3 className="font-bold text-xl text-stone-800">Easy to access</h3>
                    </div>
                    <p className="text-base font-medium text-slate-500 pt-3 lg:pt-7">
                        Our prices are lower than booking with University directly
                    </p>
                </div>
                <div className="w-[342px]  lg:text-start my-6 lg:my-0">
                    <div className="flex items-center space-x-5">
                        <div className="bg-orange-500 p-9 rounded-[29px] relative w-[73px] h-[73px] shadow-lg shadow-orange-200 cursor-pointer">
                            <EasyLightIcon />
                        </div>
                        <h3 className="font-bold text-xl text-stone-800">Easy to access</h3>
                    </div>
                    <p className="text-base font-medium text-slate-500 pt-3 lg:pt-7">
                        Our prices are lower than booking with University directly
                    </p>
                </div>
            </section>
        </div>
    );
};

export default EasySection;
