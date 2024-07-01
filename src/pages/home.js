import NavBar from "../componenets/navbar/navbar";
import Body from "../componenets/body/body";
import About from "../componenets/body-components/about/about";
import Banner from "../componenets/banner/banner";
import Products from "../componenets/body-components/products/product";
import Contact from "../componenets/body-components/contact/contact";
import Footer from "../componenets/footer/footer";
import { windowWidth } from "../const";
const Home=()=>{
    // if (WindowWidth>1024) {
        return (
            <div className="justify-content-center" style={{width:'100%',height:"auto",position:"relative"}}>

            
            <NavBar></NavBar>
            <Body></Body>
            <About></About>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
            
            <a className="fixed-bottom" style={windowWidth>768?{bottom:20,left:'92%'}:{bottom:20,left:'80%'}} aria-label="Chat on WhatsApp" href="https://wa.me/+916290873065"> <img width={windowWidth>768?80:60} height={windowWidth>768?80:60} alt="Chat on WhatsApp" src={require('../static/images/whatsapplogo.png')} /></a>
            
            </div>
        )
    // }else{
    //     return (
    //         <>
    //         <NavBar></NavBar>
    //         <Body></Body>
    //         <About></About>
    //         <Products></Products>
    //         <Contact></Contact>
    //         <Footer></Footer>
    //         </>
    //     )
    // }

}

export default Home;