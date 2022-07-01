import React from 'react'

const ProductCategories = () => {
  return (
      <>
    <div className="tab tab-with-title tab-nav-boxed appear-animate fadeIn appear-animation-visible" style={{animationDuration: "1.2s",padding:"0px 20px"}}>
        <h2 className="title">Consumer Electronics</h2>
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" href="#tab-1">New Arrivals</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tab-2">Best Seller</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tab-3">Most Popular</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tab-4">View All</a>
            </li>
        </ul>
    </div>
    <div className="tab-pane active" id="tab-1">
                        <div className="row grid-type products" style={{padding:"0px 20px"}}>
                            <div className="product-wrap sm-item">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="images/demos/demo2/products/3-3-1.jpg" alt="Product" width="300" height="220"/>
                                            <img src="images/demos/demo2/products/3-3-2.jpg" alt="Product" width="300" height="220"/>
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h4 className="product-name"><a href="product-default.html">Drone Wireless</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "60%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$89.00</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap sm-item">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="images/demos/demo2/products/3-4-1.jpg" alt="Product" width="300" height="220"/>
                                            <img src="images/demos/demo2/products/3-4-2.jpg" alt="Product" width="300" height="220"/>
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h4 className="product-name"><a href="product-default.html">Multi-colorful Music
                                                Player</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "100%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(6 Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$24.00</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap sm-item">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="images/demos/demo2/products/3-5-1.jpg" alt="Product" width="300" height="220"/>
                                            <img src="images/demos/demo2/products/3-5-2.jpg" alt="Product" width="300" height="220"/>
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h4 className="product-name"><a href="product-default.html">Charge &amp; Alarm
                                                Machine</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "80%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$39.00</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap sm-item">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="images/demos/demo2/products/3-6-1.jpg" alt="Product" width="300" height="220"/>
                                            <img src="images/demos/demo2/products/3-6-2.jpg" alt="Product" width="300" height="220"/>
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h4 className="product-name"><a href="product-default.html">Mini Wireless
                                                Earphone</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "100%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(9 Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$3.66</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap sm-item">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="images/demos/demo2/products/3-7-1.jpg" alt="Product" width="300" height="220"/>
                                            <img src="images/demos/demo2/products/3-7-2.jpg" alt="Product" width="300" height="220"/>
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h4 className="product-name"><a href="product-default.html">Hight Quality Screen
                                                Tablet</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "80%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(5 Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$173.84</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-wrap sm-item">
                                <div className="product text-center">
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="images/demos/demo2/products/3-3-1.jpg" alt="Product" width="300" height="220"/>
                                            <img src="images/demos/demo2/products/3-3-2.jpg" alt="Product" width="300" height="220"/>
                                        </a>
                                        <div className="product-action-vertical">
                                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                                            <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <h4 className="product-name"><a href="product-default.html">Drone Wireless</a></h4>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: "60%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                            <a href="product-default.html" className="rating-reviews">(8 Reviews)</a>
                                        </div>
                                        <div className="product-price">
                                            <ins className="new-price">$89.00</ins>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
    </div>
    </>
  )
}

export default ProductCategories