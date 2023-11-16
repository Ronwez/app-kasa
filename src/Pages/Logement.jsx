import Header from "../Components/Header";
import FicheLogement from "../Components/Logement/FicheLogement";
import Footer from "../Components/Footer";
import "../Styles/main.scss";



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