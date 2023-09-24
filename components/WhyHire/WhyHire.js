import Image from "next/image";

export default function WhyHireMe() {
    return (
    <section className="why_hire_section">
         <h4 className="whyHire_main_titles my-4">Why Hire Us For Your Heating and AC Needs?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            <div className="whyHire_column">
                <Image width="400" className="rounded" height="500" src="/Speedy.jpg" />
                <h4 className="whyHire_titles my-4">Speedy Service</h4>
                <p className="whyHire_text text-center">We are professional and do the job right in a timely manner. We show where you need us.</p>
            </div>

            <div className="whyHire_column">
                <Image width="400" className="rounded" height="500" src="/expert-pic.jpg" />
                 <h4 className="whyHire_titles my-4">Expert Work</h4>
                 <p className="whyHire_text text-center">Our certified technicians deliver quality work that is unmatched.</p>
            </div>

            <div className="whyHire_column">
                <Image width="400" className="rounded" height="500" src="/Customers First.jpg" />
                <h4 className="whyHire_titles my-4">Customer First</h4>
                <p className="whyHire_text text-center">We care about you as a customer. We do the job right or <span className="font-semibold">YOUR MONEY BACK</span>. <span className="font-semibold">100% GUARANTEE</span></p>
            </div>
        </div>
    </section>
    )
  }
