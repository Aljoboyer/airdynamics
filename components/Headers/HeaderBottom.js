import Link from 'next/link';
import { BsEnvelope } from 'react-icons/bs';

export default function HeaderBottom() {
    return (
    <div className='bottom_header_container'>
        <div className='bottom_header_icondiv'>
            <BsEnvelope className="header_icon" />
            <div className='ms-4'>
                <h4 className='respond_text'>We respond 24/7 to emergencies</h4>
                <h4 className='bottom_header_title'>Airdynamicshvacllc@gmail.com</h4>
            </div>
        </div>
       
        <Link href="/contact-us">
            <button className='book_now_btn mt-4'>BOOK NOW</button>
        </Link>

        <div className="emptyDiv hidden lg:inline-block"></div>

        <div className="hidden lg:inline-block">
            <div className="top_header_item">
                <div>
                <p className="top_nav_text text-white ">CALL US TODAY</p>
                <a href={`tel:${856-257-1092}`}><h4 className="top_nav_text_heading text-white">856-257-1092</h4></a>
                </div>
            </div>
        </div>
    </div>
    )
  }