import EasyBlueIcon from '../CoreUI/EasySection/EasyBlueIcon';
import EasyVioletIcon from '../CoreUI/EasySection/EasyVioletIcon';
import EasyLightIcon from '../CoreUI/EasySection/EasyLightIcon';

export default function EasySection() {
    return (
        <div>
            <section className="container mx-auto lg:max-w-screen-xl flex lg:flex-row lg:justify-between flex-col mt-24 px-5">
                <div className="w-[342px] lg:text-start my-6 lg:my-0">
                    <div className="flex items-center space-x-5">
                        <EasyBlueIcon />
                        <h3 className="font-bold text-xl text-stone-800">Easy to access</h3>
                    </div>
                    <p className="text-base font-medium text-slate-500 pt-3 lg:pt-7">
                        Our prices are lower than booking with University directly
                    </p>
                </div>
                <div className="w-[342px]  lg:text-start my-6 lg:my-0">
                    <div className="flex items-center space-x-5">
                        <EasyVioletIcon />
                        <h3 className="font-bold text-xl text-stone-800">Easy to access</h3>
                    </div>
                    <p className="text-base font-medium text-slate-500 pt-3 lg:pt-7">
                        Our prices are lower than booking with University directly
                    </p>
                </div>
                <div className="w-[342px]  lg:text-start my-6 lg:my-0">
                    <div className="flex items-center space-x-5">
                        <EasyLightIcon />
                        <h3 className="font-bold text-xl text-stone-800">Easy to access</h3>
                    </div>
                    <p className="text-base font-medium text-slate-500 pt-3 lg:pt-7">
                        Our prices are lower than booking with University directly
                    </p>
                </div>
            </section>
        </div>
    );
}
