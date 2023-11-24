import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";
import imgHomeBanner from "../assets/homeBanner.png";



const Home = () => {
    return (
        <div className="Home">
            <Header />
            <main>
            <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner}/>
            <Gallery />
            </main>
            <Footer />
        </div>
    );
}

export default Home;