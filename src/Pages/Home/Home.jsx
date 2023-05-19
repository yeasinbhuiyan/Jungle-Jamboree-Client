import AboutUs from "./About/AboutUs";
import AdorableAnimal from "./AdorableAnimal/AdorableAnimal";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <AdorableAnimal></AdorableAnimal>
            <AboutUs></AboutUs>
           

        </div>
    );
};

export default Home;