import Header from "../Components/Header";
import FicheLogement from "../Components/Logement/FicheLogement";
import Footer from "../Components/Footer";



const Logement = () => {
    return (
        <div className="logement-page">
        <Header />
        <main>
        <FicheLogement />
        </main>
        <Footer />
        </div>
    );
}

export default Logement;