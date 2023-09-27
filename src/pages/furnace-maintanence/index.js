import React from 'react'
import ContentPageHeader from '../../../components/ContentPageHeader/ContentPageHeader'
import RootContainer from '../../../components/RootContainer'
import ContactUsForm from '../../../components/ContactForm/ContactForm'

export default function FurnaceMaintanence() {
  return (
    <section className='content_section'>
        <ContentPageHeader title={'FURNACE INSTALLATION & REPLACEMENT COMPANY NEAR SOUTH JERSEY, SHORE, AND PHILLY AREA'} />

        <div className='content_div'>
            <div className='content_info_div'>
               <h1 className='content_main_titile'>Heater Maintenance, New Jersey Furnace Installation Experts</h1>
               <div className='about_title_div'></div>
               <div className='content_text_div mt-12'>
                  <h4 className='content_index_title mt-4'>TRUSTED FURNACE MAINTENANCE</h4>
                  <p className='content_text mt-4'>Before cold air arrives be sure to schedule a professional furnace maintenance visit from our team! At D’Auria & Son Heating and Air, we’ve proudly served as the go-to provider of heating tune-ups. We’re a trustworthy company that strives to ensure your home is comfortable, safe and energy efficient.<br/>

Our skilled technicians are certified, so you can rest assured knowing that your heating system is in capable hands. Our fast and responsive service means you will not have to wait long for a heating tune-up. We are well-known for our affordable pricing, honesty and dependability.</p>

                <h4 className='content_index_title mt-4'>BENEFITS OF FURNACE MAINTENANCE TUNE-UPS</h4>
                  <p className='content_text mt-4'>A well-maintained furnace or heating system is more likely to reach its full lifespan. A new heating system is a big investment, and you do not want to replace it any earlier than you absolutely need to. Keeping up with annual heating tune-ups also lowers utility bills. The cost of operating a well-cared-for heating system is about 30% less compared to the cost of operating a neglected unit.</p>

                <h4 className='content_index_title mt-4'>ADDITIONAL BENEFITS A HEATING TUNE-UP:</h4>
                  <p className='content_text mt-4'>• Better indoor air quality
• Quieter operation of heating system
• Consistent temperature throughout your home
• Reduce wear and tear on moving parts
• Maintain manufacturer’s warranty
A typical furnace tune-up takes less than an hour of your day. Our experienced technicians inspect and test every component of your heating system. If we notice excessive wear and tear or another issue, we’ll show it to you and explain why it’s a problem. We’ll give you a written report of the tasks we performed and any findings. If you have questions about your heating system, we’ll always take the time to answer them.</p>

               </div>
            </div>
            <div className='content_contact_form_div'>
              <ContactUsForm/>
            </div>
        </div>
    </section>
  )
}

FurnaceMaintanence.getLayout = function getLayout(page) {
  return (
    <RootContainer>
        {page}
    </RootContainer>
  )
}