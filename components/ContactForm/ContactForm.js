

export default function ContactUsForm() {
    return (
    <div className="contact_form_container">
         <h4 className="contact_form_title  text-[#666] my-4">Get in Touch With Us</h4>
        
        <div className="contact_form">
            <div className="flex flex-col md:flex-row couple_inputs">
                <div className="mt-4 w-full">
                    <label className="contact_label text-[#666] block">First Name <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>
                <div className="mt-4 ms-0 md:ms-0 lg:ms-7 w-full">
                    <label className="contact_label text-[#666] block">Last Name <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>
            </div>

            <h4 className="address_title mt-7 text-[#666]">Your Address</h4>
            <div className="mt-4 w-full">
                <label className="contact_label text-[#666] block">Street Address <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <input className="inputs" />
            </div>

            <div className="flex flex-col md:flex-row couple_inputs">
                <div className="mt-4 w-full">
                    <label className="contact_label text-[#666] block">City <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>
                <div className="mt-4 ms-0 md:ms-0 lg:ms-7 w-full">
                    <label className="contact_label text-[#666] block">Zip Code <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                    <input className="inputs" />
                </div>
            </div>

            <div className="mt-4 w-full sm:w-full md:w-4/6 lg:w-3/6 xl:w-3/6">
                <label className="contact_label text-[#666] block">Email Address <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <input className="inputs" />
            </div>

            <div className="mt-4 w-full sm:w-full md:w-4/6 lg:w-3/6 xl:w-3/6">
                <label className="contact_label text-[#666] block">Phone <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <input className="inputs" />
            </div>

            <div className="mt-4 w-full sm:w-full md:w-full lg:w-3/6 xl:w-3/6">
                <label className="contact_label  text-[#666] block">Type of Service <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <select id="fruitSelect" className="inputs pr-2" name="fruit">
                    <option value="apple">System Installation Estimate</option>
                    <option value="banana">Maintenance</option>
                    <option value="cherry">Repair</option>
                    <option value="orange">Other</option>
                </select>
            </div>

            <div className="mt-4 w-full">
                <label className="contact_label text-[#666] block">Your Comments/Questions <span className="text-[#C60504] italic text-xs">{`(Required)`}</span></label>
                <textarea className="comment_inputs" />
            </div>

        </div>
    </div>
    )
  }
