import React from "react";
import {Link } from "react-router-dom";
export default function Navbar() {
    return ( 
    <>
        <div className="header-middle">
                <div className="container">
                    <div className="header-left mr-md-4">
                        <a href="#" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle">
                        </a>
                        <Link to="/" className="logo ml-lg-0">
                            <img src="../images\Shopya-Black.png" alt="logo" width="144" height="45" />
                        </Link>
                        <nav className="main-nav">
                            <ul className="menu">
                                <li className="active">
                                <Link to="/blogs">Login</Link>
                                </li>
                                <li>
                                    <a href="shop-banner-sidebar.html">Shop</a>

                                    <ul className="megamenu">
                                        <li>
                                            <h4 className="menu-title">Shop Pages</h4>
                                            <ul>
                                                <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
                                                <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                                                <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
                                                            className="tip tip-hot">Hot</span></a></li>
                                                <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
                                                            className="tip tip-new">New</span></a></li>
                                                <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a></li>
                                                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="menu-title">Shop Layouts</h4>
                                            <ul>
                                                <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                                                <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                                                <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                                                <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                                                <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                                                <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                                                <li><a href="shop-list.html">List Mode</a></li>
                                                <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="menu-title">Product Pages</h4>
                                            <ul>
                                                <li><a href="product-variable.html">Variable Product</a></li>
                                                <li><a href="product-featured.html">Featured &amp; Sale</a></li>
                                                <li><a href="product-accordion.html">Data In Accordion</a></li>
                                                <li><a href="product-section.html">Data In Sections</a></li>
                                                <li><a href="product-swatch.html">Image Swatch</a></li>
                                                <li><a href="product-extended.html">Extended Info</a>
                                                </li>
                                                <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                                                <li><a href="product-video.html">360<sup>o</sup> &amp; Video<span
                                                            className="tip tip-new">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="menu-title">Product Layouts</h4>
                                            <ul>
                                                <li><a href="product-default.html">Default<span
                                                            className="tip tip-hot">Hot</span></a></li>
                                                <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                                                <li><a href="product-grid.html">Grid Images</a></li>
                                                <li><a href="product-masonry.html">Masonry</a></li>
                                                <li><a href="product-gallery.html">Gallery</a></li>
                                                <li><a href="product-sticky-info.html">Sticky Info</a></li>
                                                <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                                                <li><a href="product-sticky-both.html">Sticky Both</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="vendor-dokan-store.html">Vendor</a>
                                    <ul>
                                        <li>
                                            <a href="vendor-dokan-store-list.html">Store Listing</a>
                                            <ul>
                                                <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                                <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                                                <li><a href="vendor-wcmp-store-list.html">Store listing 3</a></li>
                                                <li><a href="vendor-wc-store-list.html">Store listing 4</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="vendor-dokan-store.html">Vendor Store</a>
                                            <ul>
                                                <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                                                <li><a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                                                </li>
                                                <li><a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                                                </li>
                                                <li><a href="vendor-wc-store-product-grid.html">Vendor Store 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">classic</a></li>
                                        <li><a href="blog-listing.html">Listing</a></li>
                                        <li>
                                            <a href="blog-grid-3cols.html">Grid</a>
                                            <ul>
                                                <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog-masonry-3cols.html">Masonry</a>
                                            <ul>
                                                <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog-mask-grid.html">Mask</a>
                                            <ul>
                                                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="post-single.html">Single Post</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="about-us.html">Pages</a>
                                    <ul>

                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="become-a-vendor.html">Become A Vendor</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="faq.html">FAQs</a></li>
                                        <li><a href="error-404.html">Error 404</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="elements.html">Elements</a>
                                    <ul>
                                        <li><a href="element-accordions.html">Accordions</a></li>
                                        <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
                                        <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                        <li><a href="element-buttons.html">Buttons</a></li>
                                        <li><a href="element-cta.html">Call to Action</a></li>
                                        <li><a href="element-icons.html">Icons</a></li>
                                        <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                                        <li><a href="element-instagrams.html">Instagrams</a></li>
                                        <li><a href="element-categories.html">Product Category</a></li>
                                        <li><a href="element-products.html">Products</a></li>
                                        <li><a href="element-tabs.html">Tabs</a></li>
                                        <li><a href="element-testimonials.html">Testimonials</a></li>
                                        <li><a href="element-titles.html">Titles</a></li>
                                        <li><a href="element-typography.html">Typography</a></li>

                                        <li><a href="element-vendors.html">Vendors</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-right ml-4">
                        <div className="header-call d-xs-show d-lg-flex align-items-center">
                            <a href="tel:#" className="w-icon-call"></a>
                            <div className="call-info d-xl-show">
                                <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                                    <a href="mailto:#" className="text-capitalize">Live Chat</a> <span className="white">or :</span></h4>
                                <a href="tel:#" className="phone-number font-weight-bolder ls-50">0(800)123-456</a>
                            </div>
                        </div>
                        <a className="wishlist label-down link d-xs-show" href="wishlist.html">
                            <i className="w-icon-heart"></i>
                            <span className="wishlist-label d-lg-show">Wishlist</span>
                        </a>
                        <a className="compare label-down link d-xs-show" href="compare.html">
                            <i className="w-icon-compare"></i>
                            <span className="compare-label d-lg-show">Compare</span>
                        </a>
                        <div className="dropdown cart-dropdown mr-0 mr-lg-2">
                            <div className="cart-overlay"></div>
                            <a href="#" className="cart-toggle label-down link">
                                <i className="w-icon-cart">
                                    <span className="cart-count">2</span>
                                </i>
                                <span className="cart-label">Cart</span>
                            </a>
                            <div className="dropdown-box">
                                <div className="products">
                                    <div className="product product-cart">
                                        <div className="product-detail">
                                            <a href="product-default.html" className="product-name">Beige knitted
                                                elas<br/>tic
                                                runner shoes</a>
                                            <div className="price-box">
                                                <span className="product-quantity">1</span>
                                                <span className="product-price">$25.68</span>
                                            </div>
                                        </div>
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/cart/product-1.jpg" alt="product" height="84"
                                                    width="94" />
                                            </a>
                                        </figure>
                                        <button className="btn btn-link btn-close" aria-label="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>

                                    <div className="product product-cart">
                                        <div className="product-detail">
                                            <a href="product-default.html" className="product-name">Blue utility
                                                pina<br/>fore
                                                denim dress</a>
                                            <div className="price-box">
                                                <span className="product-quantity">1</span>
                                                <span className="product-price">$32.99</span>
                                            </div>
                                        </div>
                                        <figure className="product-media">
                                            <a href="product-default.html">
                                                <img src="assets/images/cart/product-2.jpg" alt="product" width="84"
                                                    height="94" />
                                            </a>
                                        </figure>
                                        <button className="btn btn-link btn-close" aria-label="button">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="cart-total">
                                    <label>Subtotal:</label>
                                    <span className="price">$58.67</span>
                                </div>

                                <div className="cart-action">
                                    <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
                                    <a href="checkout.html" className="btn btn-primary  btn-rounded orange">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>

    );
}
