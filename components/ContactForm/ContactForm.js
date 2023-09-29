
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactUsForm() {
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
            console.log(result.text);
            console.log('email', e.target.message)
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
    <div className="contact_form_container">
         <h4 className="contact_form_title  text-[#666] my-4">Get in Touch With Us</h4>
        
        <form className="contact_form" onSubmit={handleOnSubmit}>
            <div className="flex flex-col md:flex-row couple_inputs">
                <div className="mt-4 w-full">
                    <label className="contact_label text-[#666] block">First Name <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input onChange={(e) => {
                        setFormObj({...formObj, firstName: e.target.value})
                    }} required name="user_name" className="inputs" />
                </div>
                <div className="mt-4 ms-0 md:ms-0 lg:ms-7 w-full">
                    <label className="contact_label text-[#666] block">Last Name </label>
                    <input  onChange={(e) => {
                        setFormObj({...formObj, lastName: e.target.value})
                    }} name="user_name" className="inputs" />
                </div>
            </div>

            <h4 className="address_title mt-7 text-[#666]">Your Address</h4>
            <div className="mt-4 w-full">
                <label className="contact_label text-[#666] block">Street Address <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <input  onChange={(e) => {
                        setFormObj({...formObj, streetAddress: e.target.value})
                    }} required className="inputs" />
            </div>

            <div className="flex flex-col md:flex-row couple_inputs">
                <div className="mt-4 w-full">
                    <label className="contact_label text-[#666] block">City <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input  onChange={(e) => {
                        setFormObj({...formObj, city: e.target.value})
                    }} required className="inputs" />
                </div>
                <div className="mt-4 ms-0 md:ms-0 lg:ms-7 w-full">
                    <label className="contact_label text-[#666] block">Zip Code <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input  onChange={(e) => {
                        setFormObj({...formObj, zip: e.target.value})
                    }} required className="inputs" />
                </div>
            </div>

            <div className="mt-4 w-full sm:w-full md:w-4/6 lg:w-3/6 xl:w-3/6">
                <label className="contact_label text-[#666] block">Email Address <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <input  onChange={(e) => {
                        setFormObj({...formObj, email: e.target.value})
                    }} required type='email' name="user_email" className="inputs" />
            </div>

            <div className="mt-4 w-full sm:w-full md:w-4/6 lg:w-3/6 xl:w-3/6">
                <label className="contact_label text-[#666] block">Phone <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <input  onChange={(e) => {
                        setFormObj({...formObj, phone: e.target.value})
                    }} required name="user_phone" className="inputs" />
            </div>

            <div className="mt-4 w-full sm:w-full md:w-full lg:w-3/6 xl:w-3/6">
                <label className="contact_label  text-[#666] block">Type of Service <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <select  onChange={(e) => {
                        setFormObj({...formObj, serviceType: e.target.value})
                    }} required id="fruitSelect" className="inputs pr-2" name="fruit">
                    <option value="System Installation Estimate">System Installation Estimate</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Repair">Repair</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className="mt-4 w-full">
                <label className="contact_label text-[#666] block">Your Comments/Questions <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <textarea  onChange={(e) => {
                        setFormObj({...formObj, comments: e.target.value})
                    }} required name="message" className="comment_inputs" />
            </div>
            <button type='submit' className="contact_book_now_btn bg-[#c60505]">BOOK SERVICE</button>
        </form>
    </div>
    )
  }
