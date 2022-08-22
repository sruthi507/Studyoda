import Image from 'next/image';
import GooglePlayIcon from '../CoreUI/MobileAppIcons/GooglePlayIcon';
import AppStoreIcons from '../CoreUI/MobileAppIcons/AppStoreIcons';
import MobileIcon from '../CoreUI/MobileAppIcons/MobileIcon';

const MobileApp = () => {
    return (
        <section>
            <div className="hidden lg:block bg-white opacity-50 absolute lg:top-[4417px] z-10 lg:left-[10px] w-full h-[235px] rounded-full lg:w-[235px] px-3"></div>
            <div className="px-5 lg:px-11">
                <div
                    className="container max-w-screen-xl px-5 left-0 bottom-4 md:-bottom-0 lg:-bottom-[304px] mx-auto flex flex-col lg:flex-row lg:justify-between text-center lg:text-start space-y-6
             lg:space-y-0 mobileApp-bg relative rounded-2xl justify-center"
                >
                    <div className="z-10 lg:w-1/2 p-2 lg:p-20 space-y-4">
                        <h2 className="font-bold text-4xl">Get our ideas now on mobile app</h2>
                        <p>
                            Collaboratively e-enable orthogonal e-services after cutting-edge initiatives. Appropriately
                            network
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-5">
                            <GooglePlayIcon />
                            <AppStoreIcons />
                        </div>
                    </div>
                    <div className="lg:w-1/2 ml-0 lg:ml-36 lg:absolute lg:-right-1 lg:-top-28 flex justify-center">
                        <MobileIcon />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
