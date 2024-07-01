import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

const NavBar=(props)=>{
    const WindowWidth  = (typeof window !== undefined)? window.innerWidth:null
    if (WindowWidth <= 768) {
        return(
            <div className='wrap'>
                <div className='logoContainer'>
                    <img src={require('../../static/images/logo.png')} width={80} height={40}></img>
                </div>
                <div className='navContainer'>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link ><h2 className='navText-small'>Home</h2></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2"><h2 className='navText-small'>Contact</h2></Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
                
                </div>  
        )
                
    }
    else{

        return(
            <div className='wrap'>
                <div className='logoContainer'>
                    <img src={require('../../static/images/logo.png')} width={80} height={40}></img>
                </div>
                <div className='navContainer'>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                    <Nav.Link onClick={()=>props.scrollToHome()}><h2 className='navText'>Home</h2></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>props.scrollToAbout()}  eventKey="link-1"><h2 className='navText'>About</h2></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={()=>props.scrollToContact()} eventKey="link-2"><h2 className='navText'>Contact</h2></Nav.Link>
                    </Nav.Item>
                </Nav>
                </div>
            </div>   
        )
    }
    
}

export default NavBar;