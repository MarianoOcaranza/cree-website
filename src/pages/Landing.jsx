import { useEffect } from "react";
import { useLocation } from "react-router";
import Presentacion from "./landing_sections/Presentacion";

const Landing = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: (element.getBoundingClientRect().top + window.scrollY) - 64,
                    behavior: 'smooth'
                })
            }
                
                //element.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
        <div id="home" className='bg-blue-500 flex min-h-[calc(100vh-64px)]'>
            <Presentacion/>
        </div>
        <div id='about' className='bg-green-500 flex min-h-[calc(100vh-64px)]'>
            <p>quienes somos</p>
        </div>
        <div id='noticias' className='bg-pink-500 flex min-h-[calc(100vh-64px)]'>
            <p>noticias</p>
        </div>
        <div id='faqs' className='bg-gray-500 flex min-h-[calc(100vh-64px)]'>
            <p>faqs</p>
        </div>
        <div id='contacto' className='bg-yellow-500 flex min-h-[calc(100vh-64px)]'>
            <p>contacto</p>
        </div>
        </>
    )
}

export default Landing