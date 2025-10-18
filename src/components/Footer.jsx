import WhatsApp from '../assets/whatsapp.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
const Footer = () => {
    return(
        <div className="flex justify-center gap-3">
            <img className='size-[30px]' src={WhatsApp} alt="" />
            <img className='size-[30px]' src={Instagram} alt="" />
            <img className='size-[30px]' src={Facebook} alt="" />
        </div>
    )
}

export default Footer