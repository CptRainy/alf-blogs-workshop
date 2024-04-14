import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import ArticleSection from "./ArticleSection";
import CtaSection from "./CtaSection";


const App = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Hero></Hero>
            <ArticleSection></ArticleSection>
            <CtaSection/>
            <Footer></Footer>
        </div>
    );
};

export default App;