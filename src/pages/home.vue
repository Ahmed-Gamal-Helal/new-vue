<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title><img src="../images/005.png" alt=""></f7-nav-title>
      <f7-nav-right>
        <f7-link href="/sopping-cart/" view="#main-view" class="left login cart" panel-close><i class="flaticon-shopping-cart"></i><span>99</span></f7-link>
        <f7-link href="/search/" view="#main-view" class="left login" panel-close><i class="flaticon-search"></i></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="home-page">
      <div class="main-slider">
        <div class="swiper-container swiper-init">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="item">
                <img class="responsive-img" src="../images/009.png" alt="">
                <h6 class="left-align">متوفر الآن</h6>
                <div class="best-one">
                  <a href="#">أفضل الكاميرات</a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="item">
                <img class="responsive-img" src="../images/006.png" alt="">
                <h6 class="left-align">غير متوفر الآن</h6>
                <div class="best-one">
                  <a href="#">أفضل الكاميرات</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divisions divisions-adj">
        <div class="container">
          <h5 class="second-color"><a href="/divisions/">الاقسام</a></h5>
          <div class="row center-align">
            <div class="col s3">
              <div class="general-item-repeat">
                <a href="#">
                  <img class="responsive-img" src="../images/008.png" alt="">
                  <span class="center-align">عدسات</span>
                </a>
              </div>
            </div>
            <div class="col s3">
              <div class="general-item-repeat">
                <a href="#">
                  <img class="responsive-img" src="../images/009.png" alt="">
                  <span class="center-align">الاضاءات</span>
                </a>
              </div>
            </div>
            <div class="col s3">
              <div class="general-item-repeat">
                <a href="#">
                  <img class="responsive-img" src="../images/007.png" alt="">
                  <span class="center-align">التصوير</span>
                </a>
              </div>
            </div>
            <div class="col s3">
              <div class="all-items">
                <a href="/divisions/">
                  الكل
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last-added mt-2">
        <div class="container">
          <h5 class="second-color mt-2"><a href="#">المضاف حديثا</a></h5>
          <div class="row">
            <div class="col s6">
              <div class="repeated-product mt-2 center-align">
                <a href="/product/" class="move-product" product-id="1">
                  <img class="responsive-img removing-pic" src="../images/006.png" alt="">
                  <h6>كاميرا SLR الرقمية</h6>
                  <span class="discount">200 ر.س</span>
                  <span class="price">180 ر.س</span>
                </a>
                <a href="#" class="like-it">
                  <i class="flaticon-like"></i>
                </a>
                <a href="#" class="shop-now">
                  <i class="flaticon-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last-added best-selling mt-2">
        <div class="container">
          <h5 class="second-color mt-2"><a href="/offers/">أفضل العروض</a></h5>
          <div class="row">
            <div class="col s6">
              <div class="repeated-product mt-2 center-align dev-mb-5">
                <a href="/product/" class="move-product" product-id="2">
                  <img class="responsive-img removing-pic" src="../images/006.png" alt="">
                  <h6>كاميرا SLR الرقمية</h6>
                  <span class="discount">200 ر.س</span>
                  <span class="price">180 ر.س</span>
                </a>
                <span class="numbered">12%</span>
                <a href="#" class="shop-now">
                  <i class="flaticon-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {}
</script>