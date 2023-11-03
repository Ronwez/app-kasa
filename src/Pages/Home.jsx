import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main>
            <Banner />
            <Gallery />
            </main>
            <Footer />
        </div>
    );
}

export default Home;