import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid footer" style={{backgroundColor:"black",color:"white !important"}} >
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget widget-about">
                                <a href="demo2.html" className="logo-footer">
                                    <img src="..\images\Shopya-Black.png" alt="logo-footer" width="144" height="45"/>
                                </a>
                                <div className="widget-body">
                                    <p className="widget-about-title">Got Question? Call us 24/7</p>
                                    <a href="tel:18005707777" className="widget-about-call">1-800-570-7777</a>
                                    <p className="widget-about-desc">Register now to get updates on pronot get up icons
                                        &amp; coupons ster now toon.
                                    </p>
                                    <div className="social-icons social-icons-colored">
                                        <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                        <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                        <a href="#" className="social-icon social-instagram w-icon-instagram"></a>
                                        <a href="#" className="social-icon social-youtube w-icon-youtube"></a>
                                        <a href="#" className="social-icon social-pinterest w-icon-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h3 className="widget-title">Company</h3>
                                <ul className="widget-body">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="#">Team Member</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="#">Affilate</a></li>
                                    <li><a href="#">Order History</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>
                                <ul className="widget-body">
                                    <li><a href="#">Track My Order</a></li>
                                    <li><a href="cart.html">View Cart</a></li>
                                    <li><a href="login.html">Sign In</a></li>
                                    <li><a href="#">Help</a></li>
                                    <li><a href="wishlist.html">My Wishlist</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>
                                <ul className="widget-body">
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Money-back guarantee!</a></li>
                                    <li><a href="#">Product Returns</a></li>
                                    <li><a href="#">Support Center</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Term and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-left">
                        <p className="copyright">Copyright © 2021 Wolmart Store. All Rights Reserved.</p>
                    </div>
                    <div className="footer-right">
                        <span className="payment-label mr-lg-8">We're using safe payment for</span>
                        <figure className="payment">
                            <img src="images/payment.png" alt="payment" width="159" height="25"/>
                        </figure>
                    </div>
                </div>
            </div>
  )
}

export default Footer;