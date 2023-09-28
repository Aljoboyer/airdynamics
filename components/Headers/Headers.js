
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Header() {
    const [formObj, setFormObj] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        zip: '',
        comments: '',
        serviceType: '',
    })
    const [loader, setLoader] = useState(false)
    const SERVICE_ID = 'service_kt2uikv';
    const TEMPLATE_ID = 'template_ej4l6gr';
    const USER_ID = 'DH5PqPDstZZqxtt1n';

    var templateParams = {
        from_name: `${formObj?.firstName} ${formObj?.lastName}`,
        to_name: 'Air Dynamics',
        message: `Hello Sir, I am from ${formObj?.streetAddress}, ${formObj?.city}, ${formObj?.zip}. I need ${formObj?.serviceType} service. ${formObj?.comments}. My contact Details Phone: ${formObj?.phone}, Email: ${formObj?.email}`
    };
    

    const handleOnSubmit = e => {
        e.preventDefault();
        setLoader(true)
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
          .then((result) => {
            setLoader(false)
            Swal.fire({
                icon: 'success',
                title: 'Service Booked Successfully'
              })
          }, (error) => {
            console.log(error.text);
            setLoader(false)
          });
        e.target.reset()
        // console.log('Form Data >>>', formObj)
        // console.log("temaplate data >>", {templateParams})
    }


    return (
    <div className="header_section">
        <div className="header_container">
        <div className="header_text_div">
            <div className="bg-[#C60504] w-full lg:w-4/6 h-14 sm:h-10">
                <p className="top_banner_text text-white text-center">Most trusted HVAC company in South Jersey</p>
            </div>
            <h1 className="main_heading text-white">FOR ALL YOUR HEATING & COOLING NEEDS</h1>
            <p className="text-white regular_text mt-12 mb-4">Top-Rated Heating & Cooling Services in  South Jersey, shore, and Philly</p>
        
            <Link href="/contact-us">
                <button className="book_now_btn text-white">BOOK NOW</button>
            </Link>
        </div>

        <form onSubmit={handleOnSubmit} className="request_form mt-4">
            <h1 className="form_title mb-4">Request Service</h1>
            <div className="flex justify-center items-center">
                <img
                src="/24-7-black.webp"
                alt="Picture of the author"
                />
                <div className="ms-2">
                    <p className="service_text"> 24/7 SERVICE</p>
                    <p className="regular_text ">Ready to serve you</p>
                </div>
            </div>

            <div className="px-4">
                <p className="service_text my-4 text-center">Schedule Free Estimate</p>

                <div className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Name <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input  onChange={(e) => {
                        setFormObj({...formObj, firstName: e.target.value})
                    }} required className="inputs" />
                </div>
                <div  className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Email <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input  onChange={(e) => {
                        setFormObj({...formObj, email: e.target.value})
                    }} required className="inputs" />
                </div>
                <div   className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Phone <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input  onChange={(e) => {
                        setFormObj({...formObj, phone: e.target.value})
                    }} required className="inputs" />
                </div>

                <div   className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Type of Service <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                        <select  onChange={(e) => {
                        setFormObj({...formObj, serviceType: e.target.value})
                    }} required id="fruitSelect" className="inputs pr-2" name="fruit">
                            <option value="System Installation Estimate">System Installation Estimate</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Repair">Repair</option>
                            <option value="Other">Other</option>
                        </select>
                </div>
            </div>
            {
                loader ? <button className='book_now_btn mt-4 ms-4'>LOADING...</button> :<button type='submit' className='book_now_btn mt-4 ms-4'>BOOK SERVICE</button>
            }
            
        </form>
    </div>
    </div>
    )
  }