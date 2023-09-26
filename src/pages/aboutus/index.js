import ContentPageHeader from "../../../components/ContentPageHeader/ContentPageHeader"
import RootContainer from "../../../components/RootContainer"
import { CgTimer } from 'react-icons/cg';
import { BsBookmarkStarFill , BsPersonSquare} from 'react-icons/bs';

export default function AboutUs() {
    return (
      <section className="">
         <ContentPageHeader title={'ABOUT AIR DYNAMICS HEATING AND AIR'} />
         <div className="about_container">
            <div className="about_text_container">
              <h1 className="about_title">Why Choose Air Dynamics Heating and Air</h1>
              <div className="about_title_div mb-7"></div>
              <p className="about_text">When your HVAC system breaks down, it can be a stressful and overwhelming experience. You don’t know who to call or how long it will take for someone to come out and help you get the problem fixed. Plus, you worry about the cost of repairs.<br/> Don’t worry! Our experienced HVAC technicians are here to help. We’ll show up quickly with all the necessary tools and parts needed to get your system running again in no time.<br/> We guarantee quality workmanship at an affordable price so that you can rest easy knowing that your home is comfortable again soon!</p>
              <button className="book_now_btn">BOOK NOW</button>
            </div>
            <div className="about_info_div ms-4">
                <div className="about_icon_div mt-10">
                    <CgTimer className="icon" />
                    <div className="">
                        <h4 className="icon_div_title">24/7 Emergency Service</h4>
                        <p className="about_text"> Our trained professionals are on call and ready to help, whenever you need it.</p>
                    </div>
                </div>

                <div className="about_icon_div mt-4">
                    <BsBookmarkStarFill className="icon" />
                    <div className=" ms-2">
                        <h4 className="icon_div_title">24/7 Emergency Service</h4>
                        <p className="about_text"> We are committed to providing our customers with the highest quality products and services.</p>
                    </div>
                </div>


                <div className="about_icon_div mt-4">
                    <BsPersonSquare className="icon" />
                    <div className=" ms-4">
                        <h4 className="icon_div_title">Professional HVAC Technicians</h4>
                        <p className="about_text"> Our team of highly-trained and certified HVAC technicians can help you keep your home or business comfortable year-round.</p>
                    </div>
                </div>
            </div>
         </div>
      </section>
    )
   
  }
  
  AboutUs.getLayout = function getLayout(page) {
    return (
      <RootContainer>
          {page}
      </RootContainer>
    )
  }
  
