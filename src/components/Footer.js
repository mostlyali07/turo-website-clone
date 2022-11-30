import React from "react";
import "../App.css";
function Footer() {
  return (
    <>
      <div className="Color_Gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12 Footer_text">
              <p>
                * Any personal insurance you may have that covers damage to the
                host’s vehicle would kick in before your protection plan, except
                in limited situations for trips booked
                <br /> in Maryland, but this protects your own wallet. Liability
                insurance is provided under a policy issued to Turo by Travelers
                Excess and Surplus Lines Company. Terms,
                <br /> conditions, and exclusions apply. The policy does not
                provide coverage for damage to a host’s vehicle.
                <br />
                <br /> For questions or information about the third party
                liability insurance that is included in protection plans in the
                US, consumers in Maryland and the licensed states listed
                <br /> here may contact Turo Insurance Agency at (415) 508-0283
                or claims@turo.agency. For questions about how damage to a
                host’s vehicle is handled, visit the
                <a href="/" className="Color_Purple">
                  Turo
                  <br />
                  Support
                </a>
                site.
                <br />
                <br /> When a trip is booked in the state of Washington,
                physical damage to the host’s vehicle is covered by insurance
                purchased by Turo, but the Turo insurance does not
                <br /> change the contractual responsibilities of hosts or
                guests with respect to physical damage to a host’s vehicle.
                <br />
                <br /> ** Terms, conditions, and exclusions apply.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
                <h6>Turo</h6>
                <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Policies</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>OpenRoad</li>
                    <li>Turo shop</li>
                </ul>
            </div>
            <div className="col-md-2">
            <h6>Locations</h6>
                <ul>
                    <li>USA (EN)</li>
                    <li>Canada (EN)</li>
                    <li>Canada (FR)</li>
                    <li>UK (EN)</li>
                </ul>
            </div>
            <div className="col-md-2">
            <h6>Explore</h6>
                <ul>
                    <li>Book a car</li>
                    <li>Weddings</li>
                    <li>Trust & safety</li>
                    <li>Sustainability</li>
                    <li>FAQs</li>
                    <li>Get help</li>
                </ul>
            </div>
            <div className="col-md-2">
            <h6>Hosting</h6>
                <ul>
                    <li>List your car</li>
                    <li>Carculator</li>
                    <li>All-Star Hosts</li>
                    <li>Host tools</li>
                    <li>Insurance & protection</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className="col-md-4">
                <div className="Social">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
