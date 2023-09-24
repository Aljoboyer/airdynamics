

export default function Footers() {
    return (
    <section className="footer_section">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="footer_column">
                <div className="footer_title_div mb-4">
                    <h4 className="footer_titles">Quick links</h4>
                </div>
                <p className="footer_link">Home</p>
                <p className="footer_link">About Us</p>
            </div>

            <div className="footer_column">
                <div className="footer_title_div mb-4">
                    <h4 className="footer_titles">Areas We Serve</h4>
                </div>
                <p className="footer_text">South Jersey</p>
                <p className="footer_text">Gloucester County</p>
                <p className="footer_text">Salem County</p>
                <p className="footer_text">Burlington County</p>
                <p className="footer_text">Camden County</p>
                <p className="footer_text">Cherry Hill</p>
            </div>

            <div className="footer_column">
                <div className="footer_title_div mb-4">
                    <h4 className="footer_titles">Our Services</h4>
                </div>
                <p className="footer_link">Heater Repair</p>
                <p className="footer_link">Heater Maintenance</p>
                <p className="footer_link">Heater Replacement</p>
                <p className="footer_link">A/C Repair</p>
                <p className="footer_link">A/C Maintenance</p>
                <p className="footer_link">A/C Replacement</p>
                <p className="footer_link">Ductless A/C Installation</p>
            </div>

            <div className="footer_column">
                <div className="footer_title_div mb-4">
                    <h4 className="footer_titles">Contact Us</h4>
                </div>
                <p className="footer_text">26 Evergreen Ave <br/> Blackwood, NJ 08012</p>
                <p className="footer_text"><span className="font-bold">P: </span> 856-257-1092</p>
                <p><span className="footer_text font-bold">E: </span> <span className="footer_link">dauriahvac@gmail.com</span></p>

                <p className="footer_text"><span className="font-bold">Hour </span> Open 24 hours</p>
                <p className="footer_text"><span className="font-bold">Fully Licensed & Insured</span> <br/>KENNETH SCOTT <br/> HVACR# 19HC00240700</p>
            </div>

        </div>
    </section>
    )
  }

  