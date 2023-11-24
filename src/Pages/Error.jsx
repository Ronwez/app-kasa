import Header from "../Components/Header";
import Error404 from "../Components/Error_message";
import Footer from "../Components/Footer";


const Error = () => {
    return (
        <div className="Error-page">
        <Header />
        <main>
        <Error404 />
        </main>
        <Footer />
        </div>
    );
}

export default Error;