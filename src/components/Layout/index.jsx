import Header from './Header';
import Footer from './Footer';

const index = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default index;
