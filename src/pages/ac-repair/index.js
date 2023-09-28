import React from 'react'
import ContentPageHeader from '../../../components/ContentPageHeader/ContentPageHeader'
import RootContainer from '../../../components/RootContainer'
import ContactUsForm from '../../../components/ContactForm/ContactForm'
import Head from 'next/head'

export default function ACRepair() {
  return (
    <section className='content_section'>
         <Head>
        <title>Air Dynamics</title>
      </Head>
        <ContentPageHeader title={'AIR CONDITIONING REPAIR COMPANY NEAR GLOUCESTER TOWNSHIP'} />

        <div className='content_div'>
            <div className='content_info_div'>
               <h1 className='content_main_titile'>Air Conditioning Repair Company Near South Jersey, shore, and Philly area</h1>
               <div className='about_title_div'></div>
               <div className='content_text_div mt-12'>
                  <h4 className='content_index_title'>AIR CONDITIONING REPAIRS</h4>
                  <p className='content_text mt-4'>Cooling problems? When others can’t fix it, we can! Air Dynamics Heating and Air offers affordable and efficient air conditioning repairs. You and your family can count on us for reliable cooling repairs. Our licensed technicians will keep your air conditioning system running at peak performance.</p>

                  <h4 className='content_index_title mt-4'>COMMON AIR CONDITIONING PROBLEMS</h4>
                  <p className='content_text mt-4'>If you notice any of the common air conditioning issues below, call Air Dynamics Heating and Air for air conditioning repairs.
• Air Not Cool Enough
• Unit Runs Constantly
• Noisy Fans or Motor
• Circuit Break Trips
• Noisy Compressor
• Lack of Air Coming Out of Registers
Call today for all your HVAC needs 856-503-8127</p>

                  <h4 className='content_index_title mt-4'>AIR CONDITIONING SECOND OPINIONS</h4>
                  <p className='content_text mt-4'>Has another company said your equipment is not repairable and needs to be replaced? Are they quoting very high prices for repairs? Maybe you just have that “feeling”. We will come out to your home free of charge to verify the diagnosis and give you a 30 day “money savings” guarantee. If after we repair your system, you obtain a written estimate for a lower price for the same repairs, we will refund the difference to you.</p>

                  <p className='content_text mt-4'>Call Air Dynamics Heating and Air today at 856-503-8127 if you would like to schedule a second opinion estimate.</p>
               </div>
            </div>
            <div className='content_contact_form_div'>
              <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

ACRepair.getLayout = function getLayout(page) {
  return (
    <RootContainer>
        {page}
    </RootContainer>
  )
}