const CopyRight = () => {
    return (
        <section className="copyright-bg text-white">
            <div className="container px-5 py-8 mx-auto flex flex-col lg:flex-row lg:justify-between text-center space-y-6 lg:space-y-0">
                <div className="space-x-7">
                    <span className="border-r-2 border-gray-400 pr-5 cursor-pointer">Terms and conditions</span>
                    <span className="border-r-2 border-gray-400 pr-5 cursor-pointer">Cookie Policy</span>
                    <span className="cursor-pointer">Privacy Policy</span>
                </div>
                <div className="font-medium cursor-pointer">2022 Studyoda, All Rights Reserved.</div>
                <div className="font-xs font-extralight">
                    <b className="font-extrabold cursor-pointer">23,029</b> Courses in Studyoda
                </div>
            </div>
        </section>
    );
};

export default CopyRight;
