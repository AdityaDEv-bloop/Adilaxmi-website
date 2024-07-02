import NavBar from "../componenets/navbar/navbar";
import Body from "../componenets/body/body";
import About from "../componenets/body-components/about/about";
import Banner from "../componenets/banner/banner";
import Products from "../componenets/body-components/products/product";
import Contact from "../componenets/body-components/contact/contact";
import Footer from "../componenets/footer/footer";
import { windowWidth } from "../const";

const Home=(props)=>{
    const SetHomeClicked=()=>{
        window.scrollTo(0,200);
    }
    const SetAboutClicked=()=>{
        window.scrollTo(300,500);
    }
    const SetContactClicked=()=>{
        window.scrollTo(1500,1700);
    }
        return (
            <div className="justify-content-center" style={{width:'100%',height:"auto",position:"relative"}}>

            
            <NavBar scrollToHome={SetHomeClicked} scrollToAbout={SetAboutClicked} scrollToContact={SetContactClicked}></NavBar>
            <Body></Body>
            <About></About>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
            
            <a className="fixed-bottom" style={windowWidth>768?{bottom:20,left:'92%'}:{bottom:20,left:'80%'}} aria-label="Chat on WhatsApp" href="https://wa.me/+919596013604"> <img width={windowWidth>768?80:60} height={windowWidth>768?80:60} alt="Chat on WhatsApp" src={require('../static/images/whatsapplogo.png')} /></a>
            
            </div>
        )

}

export default Home;