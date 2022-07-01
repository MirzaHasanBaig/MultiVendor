import React from 'react'


export const TimeProduct = () => {
  var lets = "https://www.csscodelab.com/react-card-slider-component/";
  return (
      <>
    <div className="title-link-wrapper mb-2 appear-animate fadeIn appear-animation-visible" style={{animationDuration: "1.2s",padding:"0px 20px"}}>
                    <h2 className="title">Top Rated Products</h2>
                    <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">More Products<i className="w-icon-long-arrow-right"></i></a>
    </div>
    <div className="swiper-slide product-wrap" style={{display:"flex",flexDirection:"col",justifyContent:"space-evenly"}}>
    <div className="product text-center" style={{width:"15%"}}>
      <figure className="product-media">
          <a href="product-default.html">
              <img src="../images/demos/demo2/products/4-1-1.jpg" alt="Product" width="300" height="338"/>
              <img src="../images/demos/demo2/products/4-1-2.jpg" alt="Product" width="300" height="338"/>
          </a>
          <div className="product-label-group">
              <label className="product-label label-discount">-15%</label>
          </div>
          <div className="product-action-vertical">
              <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
              <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
              <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
              <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
          </div>
          <div className="product-countdown-container">
              <div className="product-countdown countdown-compact is-countdown" data-until="2022, 6, 9" data-format="DHMS" data-compact="false" data-labels-short="Days, Hours, Mins, Secs"><span className="countdown-row countdown-show4"><span className="countdown-section"><span className="countdown-amount">00</span><span className="countdown-period">Days</span></span><span className="countdown-section"><span className="countdown-amount">00</span><span className="countdown-period">Hrs</span></span><span className="countdown-section"><span className="countdown-amount">00</span><span className="countdown-period">Mins</span></span><span className="countdown-section"><span className="countdown-amount">00</span><span className="countdown-period">Secs</span></span></span></div>
          </div>
      </figure>
      <div className="product-details">
          <h4 className="product-name"><a href="product-default.html">White Schoolbag</a></h4>
          <div className="ratings-container">
              <div className="ratings-full">
                  <span className="ratings" style={{width: "100%"}}></span>
                  <span className="tooltiptext tooltip-top"></span>
              </div>
              <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
          </div>
          <div className="product-price">
              <ins className="new-price">$56.48</ins>
          </div>
      </div>
  </div>              
    <div className="product text-center" style={{width:"15%"}}>
            <figure className="product-media">
                <a href="product-default.html">
                    <img src="../images/demos/demo2/products/1-1-1.jpg" alt="Product" width="300" height="338"/>
                    <img src="../images/demos/demo2/products/1-1-2.jpg" alt="Product" width="300" height="338"/>
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                </div>
            </figure>
            <div className="product-details">
                <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{width: "100%"}}></span>
                        <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                </div>
                <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                </div>
            </div>
        </div>
        <div className="product text-center" style={{width:"15%"}}>
            <figure className="product-media">
                <a href="product-default.html">
                    <img src="../images/demos/demo2/products/1-1-1.jpg" alt="Product" width="300" height="338"/>
                    <img src="../images/demos/demo2/products/1-1-2.jpg" alt="Product" width="300" height="338"/>
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                </div>
            </figure>
            <div className="product-details">
                <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{width: "100%"}}></span>
                        <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                </div>
                <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                </div>
            </div>
        </div>
        <div className="product text-center" style={{width:"15%"}}>
            <figure className="product-media">
                <a href="product-default.html">
                    <img src="../images/demos/demo2/products/1-1-1.jpg" alt="Product" width="300" height="338"/>
                    <img src="../images/demos/demo2/products/1-1-2.jpg" alt="Product" width="300" height="338"/>
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                </div>
            </figure>
            <div className="product-details">
                <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{width: "100%"}}></span>
                        <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                </div>
                <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                </div>
            </div>
        </div>
        <div className="product text-center" style={{width:"15%"}}>
            <figure className="product-media">
                <a href="product-default.html">
                    <img src="../images/demos/demo2/products/1-1-1.jpg" alt="Product" width="300" height="338"/>
                    <img src="../images/demos/demo2/products/1-1-2.jpg" alt="Product" width="300" height="338"/>
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                </div>
            </figure>
            <div className="product-details">
                <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{width: "100%"}}></span>
                        <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                </div>
                <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                </div>
            </div>
        </div>
        <div className="product text-center" style={{width:"15%"}}>
            <figure className="product-media">
                <a href="product-default.html">
                    <img src="../images/demos/demo2/products/1-1-1.jpg" alt="Product" width="300" height="338"/>
                    <img src="../images/demos/demo2/products/1-1-2.jpg" alt="Product" width="300" height="338"/>
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                    <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                <div className="product-label-group">
                    <label className="product-label label-new">New</label>
                </div>
            </figure>
            <div className="product-details">
                <h4 className="product-name"><a href="product-default.html">Women's Comforter</a></h4>
                <div className="ratings-container">
                    <div className="ratings-full">
                        <span className="ratings" style={{width: "100%"}}></span>
                        <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">(3 Reviews)</a>
                </div>
                <div className="product-price">
                    <ins className="new-price">$45.62 - $58.28</ins>
                </div>
            </div>
        </div>
      </div>
      </>
  )
}
