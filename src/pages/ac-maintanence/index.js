import React from 'react'
import ContentPageHeader from '../../../components/ContentPageHeader/ContentPageHeader'
import RootContainer from '../../../components/RootContainer'
import ContactUsForm from '../../../components/ContactForm/ContactForm'
import Head from 'next/head'

export default function ACMaintanence() {
  return (
    <section className='content_section'>
         <Head>
        <title>Air Dynamics</title>
      </Head>
        <ContentPageHeader title={'AIR CONDITIONING MAINTENANCE COMPANY NEAR GLOUCESTER TOWNSHIP'} />

        <div className='content_div'>
            <div className='content_info_div'>
               <h1 className='content_main_titile'>Air Conditioning Maintenance Company Near South Jersey, shore, and Philly area</h1>
               <div className='about_title_div'></div>
               <div className='content_text_div mt-12'>
                  <h4 className='content_index_title'>A/C MAINTENANCE SPECIALISTS IN GLOUCESTER South JERSEY</h4>
                  <p className='content_text mt-4'>When you want to schedule AC maintenance consider our experienced team at Air Dynamics Heating and Air.  Our locally owned and operated company will make sure that your air conditioner is ready to keep your home cool. A properly maintained cooling system can ensure that each room in your house can be kept at the right temperature.</p>

                  <p className='content_text mt-4'>Our technicians are highly experienced and ready to perform an AC tune-up on any make or model of air conditioner. The best interests of our customers are always kept in mind.</p>

                  <p className='content_text mt-4'>OUR COMPANY IS KNOWN FOR:

• Offering outstanding customer service
• Performing high-quality work
• Service since 2001
• 24/7 emergency service
With our flexible appointment availability during the week, we can make it easy to schedule our AC tune-up services. We want to be the team you turn to throughout the lifetime of your air conditione</p>

<h4 className='content_index_title'>TRUSTED AC TUNE-UPS FOR GLOUCESTER</h4>
                  <p className='content_text mt-4'>The AC tune-up services offered by D’Auria & Son Heating and Air will save you a lot of money on your cooling bills. Our technicians will clean out the various components of your air conditioner to improve energy transfer throughout the system. Any dirty air filters can be replaced, and we’ll make sure that all of the safety systems are functioning properly. You’ll be alerted to any issues that we uncover so that you can get them addressed..</p>
               </div>
            </div>
            <div className='content_contact_form_div'>
              <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

ACMaintanence.getLayout = function getLayout(page) {
  return (
    <RootContainer>
        {page}
    </RootContainer>
  )
}