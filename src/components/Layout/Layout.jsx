import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './Layout.css'



export default function Layout ({children}) {
    return (
        
        <div className='layout'>
            <div className='header'>
                <Brand />
                <NavBar />
            </div>
            <main className='main'>{children}</main>
            <Footer />
        </div>

    );
}