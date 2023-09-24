import NavItem from "./NavItem";


export default function Navbars() {
    return (
    <div className="nav_bars">
        <div className="navbar_top_header ">
            <div className="top_header_item icon_top_item py-4 lg:p-0">
                <img
                src="/logoImg/logo.webp"
                alt="Picture of the author"
            
                />
            </div>
            <div className="bg-[#075793] w-full navbar_top_header  mt-4 lg:mt-0 py-4 lg:px-4">
                <div className="hidden lg:inline-block">
                <div className="top_header_item ">
                    <img
                    src="/logoImg/satifaction.webp"
                    alt="Picture of the author"
                    />
                    <h4 className="top_nav_text text-white italic ms-2">100% Satisfaction Guarantee</h4>
                </div>
                </div>

                <div className="emptyDiv hidden lg:inline-block"></div>

                <div className="hidden lg:inline-block">
                    <div className="top_header_item ">
                        <img
                        src="/logoImg/24-badge-1.webp"
                        alt="Picture of the author"
                        />
                        <h4 className="top_nav_text text-white italic ms-2">24/7 Emergency service</h4>
                    </div>
                </div>

                <div className="emptyDiv hidden lg:inline-block"></div>

                <div className="top_header_item">
                    <div>
                    <p className="top_nav_text text-white ">CALL US TODAY</p>
                    <h4 className="top_nav_text_heading text-white">856-257-1092</h4>
                    </div>
                </div>
            </div>
        </div>
        <NavItem/>
    </div>
    )
  }

