import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

export default function LandingAbout() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

    return (
    <section className="landing_about_section">
        <div className="landing_about_container">
            <div className="landing_about_img_div">
           
            <Image className="rounded" height="800" width="900" src="/Customers First.jpg" />
             
                {/* <Slider className="bg-black" {...settings}>
                    <div className="w-full">
                        <Image className="rounded" height="800" width="900" src="/Customers First.jpg" />
                    </div>
                    <div  className="w-full">
                        <Image className="rounded" height="800" width="900" src="/crane.jpg" />
                    </div>
                    <div  className="w-full">
                        <Image className="rounded" height="800" width="900" src="/home.JPG" />
                    </div>
                    <div  className="w-full">
                        <Image className="rounded" height="800" width="900" src="/machine1.PNG" />
                    </div>
                </Slider> */}
            </div>

            <div className="pp-4 sm:p-10">
            <h1 className="about_title">About your local HVAC contractor</h1>
                <div className="about_title_div mb-7 mt-2">
                
                </div>
                <p className="about_text">Air-Dynamics provides the best in HVAC services in the South Jersey area. We are committed to providing the most effective HVAC solutions for all residential and commercial needs, from heating to cooling. <br/> Our HVAC systems are designed to provide superior comfort and optimal healing in any setting. With our system installs and service both efficient and reliable, <br/> our customers can trust us to deliver the reliable cooling or heating solutions for their HVAC needs. You are getting a team with multi-decades of experience delivering a high quality service to your home or business.</p>
                 <Link href="/aboutus">
                        <button className="book_now_btn">ABOUT US</button>
                </Link>
            </div>
        </div>
    </section>
    )
  }