import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { FaTelegram, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer ">
            <div className="">
                <div className=' row row-f container pt-16 pb-8 '>
                    <div className="col-md-4 row  footer-links">
                        <h3 className='text-base font-bold mb-2  '>customer service</h3>
                        <Link href="/contact us">Contact Us</Link>
                        <Link href="role">Rule and Policy</Link>
                        <Link href="security">FAQs</Link>
                    </div>
                    <div className="col-md-4">
                        <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                            <h3 className='text-base font-bold mb-2  '>About Us</h3>
                            <p className='mb-2'> Our hasab provide anoymomity  </p>

                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <ul className="footer-links row justify-content-end">
                            <li><Link to="/"><FaTelegram /> Telegram</Link></li>
                            <li><Link to="/about"><FaFacebook /> Facebook</Link></li>
                            <li><Link to="/contact"><FaTwitter /> Twitter</Link></li>
                            <li><Link to="/contact"><FaInstagram /> Instagram</Link></li>

                        </ul>
                        
                    </div>
                    <footer>
                    <p style={{alignItems:'center',marginLeft:'35%'}}>&copy; 2023 hasab. All rights reserved.</p>
</footer>
                </div>
            </div>
            

        </footer>
    );
};

export default Footer;