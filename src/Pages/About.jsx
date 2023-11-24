import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Collapse from "../Components/Collapse";
import Footer from "../Components/Footer";
import imgAboutBanner from "../assets/aboutBanner.png";
import CollapseData from "../data/collapse.json";

const About = () => {
    return (
      <div className="about">
        <Header />
        <main>
        <Banner image={imgAboutBanner}/>
  
          <div className="collapse">
            <div className="collapse__dropdown">
              {CollapseData.map((item) => {
                return (
                  <div key={item.id}>
                    <Collapse content={item.content} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </main>
  
        <Footer />
      </div>
    );
  };
  
  export default About;