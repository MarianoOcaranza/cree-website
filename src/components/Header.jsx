import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [institucionesOpen, setInstitucionesOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleInstituciones = () => {
        setInstitucionesOpen(!institucionesOpen);
    };

    return (
        <header className="bg-gray-800 sticky top-0 text-white">
            <nav className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Brand */}
                    <Link to="/" className="text-xl font-bold">
                        Logo
                    </Link>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <Link to="/" className="hover:text-gray-300">
                            ¿Quiénes somos?
                        </Link>
                        <a href="/#noticias" className="hover:text-gray-300">
                            Noticias
                        </a>

                        {/* Nuestras Instituciones dropdown (desktop) */}
                                        <div className="relative">
                            <button
                                onClick={toggleInstituciones}
                                className="hover:text-gray-300 flex items-center gap-2"
                            >
                                Nuestras Instituciones
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded shadow-md z-20 ${
                                    institucionesOpen ? 'block' : 'hidden'
                                }`}
                            >
                                                <div className="flex flex-col py-2">
                                                    <Link to="/escuela" className="px-4 py-2 hover:bg-gray-700" onClick={() => setInstitucionesOpen(false)}>
                                                        Escuela especial
                                                    </Link>
                                                    <Link to="/cdd" className="px-4 py-2 hover:bg-gray-700" onClick={() => setInstitucionesOpen(false)}>
                                                        Centro de Día
                                                    </Link>
                                                    <Link to="/cfi" className="px-4 py-2 hover:bg-gray-700" onClick={() => setInstitucionesOpen(false)}>
                                                        Centro de Formación Integral
                                                    </Link>
                                                </div>
                            </div>
                        </div>

                        <Link to="/#faqs" className="hover:text-gray-300">
                            Preguntas Frecuentes
                        </Link>
                        <Link to="/#contacto" className="hover:text-gray-300">
                            Contacto
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } md:hidden pb-4`}
                >
                    <div className="flex flex-col gap-4 items-center space-y-2">
                        <Link to="/" className="hover:text-gray-300">
                            ¿Quiénes somos?
                        </Link>
                        <Link to="/#noticias" className="hover:text-gray-300">
                            Noticias
                        </Link>

                        {/* Nuestras Instituciones (mobile) */}
                        <div className="w-full px-4">
                            <button
                                onClick={toggleInstituciones}
                                className="w-full text-left flex items-center justify-between hover:text-gray-300 py-2"
                            >
                                <span>Nuestras Instituciones</span>
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`${institucionesOpen ? 'block' : 'hidden'} flex flex-col mt-2`}>
                                <Link to="/escuela" className="px-2 py-2 hover:bg-gray-700 rounded" onClick={() => setInstitucionesOpen(false)}>
                                    Escuela especial
                                </Link>
                                <Link to="/cdd" className="px-2 py-2 hover:bg-gray-700 rounded" onClick={() => setInstitucionesOpen(false)}>
                                    Centro de Día
                                </Link>
                                <Link to="/cfi" className="px-2 py-2 hover:bg-gray-700 rounded" onClick={() => setInstitucionesOpen(false)}>
                                    Centro de Formación Integral
                                </Link>
                            </div>
                        </div>

                        <Link to="/#faqs" className="hover:text-gray-300">
                            Preguntas Frecuentes
                        </Link>
                        <Link to="/#contacto" className="hover:text-gray-300">
                            Contacto
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
