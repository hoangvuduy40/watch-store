import Header from '../../components/Header';
import Footer from '../../components/Footer';

function LayoutSidebar({ children }) {
    return (
        <div>
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
}

export default LayoutSidebar;
