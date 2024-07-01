import NavBar from "../componenets/navbar/navbar";
import Body from "../componenets/body/body";
import About from "../componenets/body-components/about/about";
import Banner from "../componenets/banner/banner";
import Products from "../componenets/body-components/products/product";
import Contact from "../componenets/body-components/contact/contact";
import Footer from "../componenets/footer/footer";
const Home=()=>{
    const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
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