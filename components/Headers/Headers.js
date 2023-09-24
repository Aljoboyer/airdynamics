
export default function Header() {
    return (
    <div className="header_container">
        <div className="header_text_div">
            <div className="bg-[#C60504] w-full lg:w-4/6 h-14 sm:h-10">
                <p className="top_banner_text text-white text-center">Most trusted HVAC company in South Jersey</p>
            </div>
            <h1 className="main_heading text-white">FOR ALL YOUR HEATING & COOLING NEEDS</h1>
            <p className="text-white regular_text mt-12 mb-4">Top-Rated Heating & Cooling Services in South Jersey Since 2001</p>
            <button className="book_now_btn text-white">BOOK NOW</button>
        </div>

        <div className="request_form mt-4">
            <h1 className="form_title mb-4">Request Service</h1>
            <div className="flex justify-center items-center">
                <img
                src="/24-7-black.webp"
                alt="Picture of the author"
                />
                <div className="ms-2">
                    <p className="service_text"> 24/7 SERVICE</p>
                    <p className="regular_text ">Ready to serve you</p>
                </div>
            </div>

            <div className="px-4">
                <p className="service_text my-4 text-center">Schedule Free Estimate</p>

                <div className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Name <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>
                <div  className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Email <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>
                <div   className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Phone <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>

                <div   className="mt-4">
                    <label className="nav_item text-base text-[#666] block">Type of Service <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                        <select id="fruitSelect" className="inputs pr-2" name="fruit">
                            <option value="apple">System Installation Estimate</option>
                            <option value="banana">Maintenance</option>
                            <option value="cherry">Repair</option>
                            <option value="orange">Other</option>
                        </select>
                </div>
            </div>

            <button className='book_now_btn mt-4 ms-4'>BOOK SERVICE</button>
        </div>
    </div>
    )
  }