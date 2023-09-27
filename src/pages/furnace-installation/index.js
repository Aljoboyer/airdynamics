import React from 'react'
import ContentPageHeader from '../../../components/ContentPageHeader/ContentPageHeader'
import RootContainer from '../../../components/RootContainer'
import ContactUsForm from '../../../components/ContactForm/ContactForm'

export default function FurnaceInstallation() {
  return (
    <section className='content_section'>
        <ContentPageHeader title={'FURNACE INSTALLATION & REPLACEMENT COMPANY NEAR SOUTH JERSEY, SHORE, AND PHILLY AREA'} />

        <div className='content_div'>
            <div className='content_info_div'>
               <h1 className='content_main_titile'>Trust the Local Gloucester, New Jersey Furnace Installation Experts</h1>
               <div className='about_title_div'></div>
               <div className='content_text_div mt-12'>
                  <h4 className='content_index_title mt-4'>RELIABLE FURNACE INSTALLATIONS</h4>
                  <p className='content_text mt-4'>If you’re considering a furnace installation turn to the experts at Air Dynamics Heating and Air. Our family-operated and -owned business has been working with furnaces since 2001. When it comes to meeting your heating needs quickly, our skilled technicians are ready to take up the challenge. We work hard to get jobs done right the first time. You don’t have to worry about your temperature control system because we provide long-term turnkey solutions. You’ll love our quick response times and a professional heating installation from our crew.</p>

                <h4 className='content_index_title mt-4'>WHY CHOOSE Air Dynamics FOR YOUR FURNACE INSTALLATION?</h4>
                  <p className='content_text mt-4'>• Flexible appointment options
                • Financing available with approved credit
                • Professionally certified and experienced technicians
                • High-quality products
                • Our commitment to excellence
                Unfortunately, no furnace system will function forever. If your unit breaks down, it is generally better to opt for a heating installation sooner than later. Deterioration and old age can make your device unreliable and unusable. If you continue to use a damaged heater, you may have higher utility bills. Furthermore, you’ll experience inconsistent and frustrating heating.</p>

                <h4 className='content_index_title mt-4'>REASONS FOR INSTALLING NEW HEATERS:</h4>
                  <p className='content_text mt-4'>• Lower energy bills
• Improved interior comfort
• Excellent airflow
• Better overall technology
With over 20 years of experience, we know how to address common heating issues. We recommend that you replace boilers and heat pumps that are not working properly. If you let us assist you, you will have a new heater that you can trust for years to come.</p>

               </div>
            </div>
            <div className='content_contact_form_div'>
              <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

FurnaceInstallation.getLayout = function getLayout(page) {
  return (
    <RootContainer>
        {page}
    </RootContainer>
  )
}