import testImg from '../../assets/test_img.png';
import { Link } from 'react-router';

const Presentacion = () => {
    return (
        <section className="w-full h-screen relative">
            <img
                src={testImg}
                alt="Presentación"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white/80 pointer-events-none" />
            <div className='flex h-full p-4'>
                <div className="relative hidden w-1/2 z-10 lg:flex flex-col justify-center items-center h-full"></div>
                <div className="relative w-full lg:w-1/2 p-3 z-10 flex flex-col justify-center items-center h-full">
                    <h1 className='lg:text-6xl text-5xl font-extrabold text-blue-950'>Somos CREE</h1>
                    <p className='font-bold text-center text-blue-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis illum beatae accusantium excepturi eos fugiat, voluptatem maiores similique ut atque vitae sit distinctio veniam delectus dolorem dolor quia amet itaque officiis ullam placeat sunt nulla? Culpa inventore necessitatibus pariatur?</p>
                    <Link to='/#about' className='p-3 bg-blue-950 text-white rounded-xl mt-5 hover:bg-blue-500 transition-all duration-300 shadow-md'>
                        ¡Conocé más sobre nosotros!
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Presentacion;