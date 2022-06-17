import React from 'react'
import Image from 'next/image'
import i1 from '../Component/Images/fb.svg'
import i2 from '../Component/Images/in.svg'
import i3 from '../Component/Images/inst.svg'

export default function Footer() {
    return (
        <div>
                  <footer>
            <div className="ftr-main container-fluid">
                <div className="container">
                    {/* <div className="proj-logo"><a href="https://mycity.runwal-group.com/"><Image src={i1} alt="project logo" /></a></div> */}
                  
                    <div className="col-lg-12 text-center">
                        <div className="term_sec">
                            <a href="https://www.homesfy.in/privacy.html" target="blank" className="termA">Privacy Policy</a>
                            <span>|</span>
                            <a href="https://www.homesfy.in/terms.html" target="blank" className="termA">Terms &amp; Conditions</a>
                        </div>
                        <div className="copyright_sec">
                            <p>© Homesfy – Craft Financial Advisors Pvt. Ltd. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="social-link">
                        <a href="https://www.facebook.com/homesfy"><Image src={i1} alt="fb-logo"/></a>
                        <a href="https://www.linkedin.com/company/craft-property"><Image src={i2} alt="tw-logo"/></a>
                        <a href="https://www.instagram.com/homesfyindia/?igshid=1hua89m9py0ue"><Image src={i3} alt="int-logo"/></a>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="footer-text-content">Disclaimer :The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purpose only. This is not the official website. Website maintained by our online marketing agency pact partners. We may share data with rera registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us. You may unsubscribe anytime by writing to us at unsubscribe@pactpartners.in All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
    </footer>
        </div>
    )
}
