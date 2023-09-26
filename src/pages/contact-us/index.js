import Image from "next/image";
import ContentPageHeader from "../../../components/ContentPageHeader/ContentPageHeader"
import RootContainer from "../../../components/RootContainer"
import { CgTimer } from 'react-icons/cg';
import ContactUsForm from "../../../components/ContactForm/ContactForm";


export default function ContactUs() {
return (
    <section className="">
        <ContentPageHeader title={'CONTACT AIR-DYNAMICS FOR A FREE ESTIMATE'} />
        <div className="address_card_div p-7">
            <div className="address_card mt-4">
                <Image height="100" width="100" src="/logoImg/logo.webp" />
                <div>
                    <h4 className="card_title">Our address</h4>
                    <p className="card_text">26 Evergreen Ave <br/> Blackwood, NJ 08012</p>
                </div>
            </div>

            <div className="address_card mt-4">
                <Image height="100" width="100" src="/logoImg/logo.webp" />
                <div>
                    <h4 className="card_title">Call Us</h4>
                    <p className="card_text">856-257-1092</p>
                </div>
            </div>

        </div>

        <div className="contact_form_cotainer">
              <h1 className="about_title">We offer residential, commercial, and industrial HVAC services.</h1>
              <div className="about_title_div mb-7"></div>

              <ContactUsForm/>
              <button className="book_now_btn">BOOK SERVICE</button>
        </div>
    </section>
)
   
  }
  
  ContactUs.getLayout = function getLayout(page) {
    return (
      <RootContainer>
          {page}
      </RootContainer>
    )
  }
  
