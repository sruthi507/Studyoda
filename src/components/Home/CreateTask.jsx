import RightArrowIcon from '../CoreUI/CreateTask/RightArrow';
import Image from 'next/image';
import CheckIcon from '../CoreUI/CreateTask/checkIcon';

const CreateTask = () => {
    return (
        <div className=" mb-80 relative mt-24">
            <div className="notes-bg-blue absolute -top-[4rem] left-0 z-0 w-full h-[594px] rounded-full lg:w-[694px] px-3"></div>

            <div className="container mx-auto lg:max-w-screen-sm my-20">
                <div className="bg-white mx-24 text-center shadow-lg rounded-lg lg:rounded-full flex flex-col lg:flex-row justify-between">
                    <div className="cursor-pointer px-6 py-2 my-1 mx-1 font-bold text-base hover:bg-pink-400 hover:text-white hover:mx-1 hover:my-1 hover:border-red-900 hover:rounded-full">Notes</div>
                    <div className="cursor-pointer px-6 py-2 my-1 mx-1 font-bold text-base hover:bg-pink-400 hover:text-white hover:mx-1 hover:my-1 hover:border-red-900 hover:rounded-full">Create Tasks</div>
                    <div className="cursor-pointer px-6 py-2 my-1 mx-1 font-bold text-base hover:bg-pink-400 hover:text-white hover:mx-1 hover:my-1 hover:border-red-900 hover:rounded-full">Status changes</div>
                </div>
            </div>

            <div className="container mx-auto lg:max-w-screen-xl">
                <div className="flex flex-col lg:flex-row text-center px-10 lg:px-24 space-x-14 space-y-8 lg:space-y-0">
                    <div className="lg:w-1/2 bg-white rounded-xl p-4 relative">
                        <div className="flex justify-between">
                            <span>Notes</span>
                            <div className="text-3xl text-teal-400"><ion-icon name="add-outline"></ion-icon></div>
                        </div>
                        <div className="flex justify-between items-center px-8 py-4">
                            <span>Your Note <b>03</b></span>
                            <div className="bg-zinc-100 rounded-full relative p-5">
                                <div className="text-3xl absolute top-1 left-1"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
                            </div>
                        </div>
                        <div className="mt-2 text-start leading-relaxed">
                            <p className='px-8'>Credibly morph installed base sources whereas distinctive products.Credibly morph installed base sources whereas distinctive products.Credibly morph installed Credibly morph installed base sources whereas distinctive products.Credibly morph installed base sources whereas distinctive products.Credibly</p>
                        </div>
                        <div className="flex items-center space-x-2 justify-center mt-6 mb-3">
                            <span className="font-medium">Open Note</span>
                            <RightArrowIcon />
                        </div>
                    </div>
                    <div className="lg:w-3/5 py-16 lg:py-20 px-5 text-start space-y-5 pr-0 lg:pr-12">
                        <h1 className="font-bold text-4xl">Studyoda Notes</h1>
                        <h4 className="font-medium mb-4">Leverage agile frameworks to provide a robust synopsis for high level overviews. </h4>
                        <div className="flex items-center space-x-2"> 
                            <CheckIcon />
                            <p>Add a your new customized Note</p>
                        </div>
                        <div className="flex items-center space-x-2"> 
                            <CheckIcon />
                            <p>Click<b> Open Note </b>button here open full note</p>
                        </div>
                        <div className="flex items-center space-x-2"> 
                            <CheckIcon />
                            <p>Leverage agile frameworks to provide a robust synopsis </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;

