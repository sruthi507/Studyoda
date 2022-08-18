import Header from './Header';
import Footer from './Footer';

const index = (props) => {
    return (
        <div className="bg-gradient-to-r from-red-50 via-white-100 to-violet-50 w-full h-screen">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default index;
