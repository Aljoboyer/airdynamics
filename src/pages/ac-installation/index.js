import React from 'react'
import ContentPageHeader from '../../../components/ContentPageHeader/ContentPageHeader'
import RootContainer from '../../../components/RootContainer'
import ContactUsForm from '../../../components/ContactForm/ContactForm'

export default function ACInstallations() {
  return (
    <section className='content_section'>
        <ContentPageHeader title={'AIR CONDITIONING INSTALLATION COMPANY IN GLOUCESTER TOWNSHIP'} />

        <div className='content_div'>
            <div className='content_info_div'>
               <h1 className='content_main_titile'>Air Conditioning Installation Company Near South Jersey, shore, and Philly area</h1>
               <div className='about_title_div'></div>
               <div className='content_text_div mt-12'>
                  <h4 className='content_index_title'>GET HIGH-QUALITY HEATING AND A/C SYSTEM INSTALLATIONS</h4>
                  <p className='content_text mt-4'>When you are in the market for a new heating or cooling system, get in touch with the professionals at Air Dynamics Heating and Air! You will receive the best possible service from our trained technicians when you call us for system installations. <br/> We will schedule your appointment at a time that works best for you, and you will receive a two-year labor warranty on all installations.</p>

                  <h4 className='content_index_title mt-4'>OFFERING ALL MAJOR BRANDS OF EQUIPMENT</h4>
                  <p className='content_text mt-4'>We carry all major brands of heating and cooling equipment to offer you a wide range of options. Once you hire us, we will have your new system up and running in no time.</p>

                  <h4 className='content_index_title mt-4'>TRANSPARENT PRICING POLICY ON ALL INSTALLATIONS</h4>
                  <p className='content_text mt-4'>No matter if you are a homeowner or business owner, you can come to us for efficient system installation services. Count on us to be upfront and honest regarding rates – you will never be surprised by any extra charge or surcharge when you choose us.</p>
               </div>
            </div>
            <div className='content_contact_form_div'>
              <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

ACInstallations.getLayout = function getLayout(page) {
  return (
    <RootContainer>
        {page}
    </RootContainer>
  )
}