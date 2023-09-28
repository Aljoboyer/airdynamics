import Image from "next/image";

export default function DifferenceSection() {
    return (
    <section className="difference_section">
        <div className="difference_text_div">
            <h1 className="difference_title mt-4">See The Air Dynamics Difference For Yourself</h1>
            <p className="difference_text mt-7">Air Dynamics Heating and Air is a truly precious and operated HVAC business that has been providing top-notch services with over three decades of experience. We take pride in our ability to service both residential and commercial customers alike, as our team of heating and air conditioning contractors are all professionally certified and highly experienced in all aspects of HVAC maintenance and repair. We understand that a properly functioning air conditioner or furnace is integral to comfortable living. That’s why we are available 24/7 for emergency repair services, in addition to our regular preventative maintenance plans. Our team’s knowledge and commitment to quality work is unrivaled.</p>
        </div>

        <div className="diff_img_div">
            <Image className="rounded" height="800" width="900" src="/crane.jpg" />
        </div>
    </section>
    )
  }