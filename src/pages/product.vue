<!-- عرض المنتج -->
<template>
  <f7-page>
    <f7-navbar title="كاميرا ديجيتال سونى" back-link="Back" sliding></f7-navbar>
    <div class="sony-digital">
      <div class="container">
        <f7-swiper pagination >
          <f7-swiper-slide>
            <div class="item">
              <img class="responsive-img" src="../images/009.png" alt="">
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="item">
              <img class="responsive-img" src="../images/009.png" alt="">
            </div>
          </f7-swiper-slide>
          <f7-swiper-slide>
            <div class="item">
              <img class="responsive-img" src="../images/008.png" alt="">
            </div>
          </f7-swiper-slide>
        </f7-swiper>
        <div class="add-rating mt-2">
          <div class="row">
            <div class="col s6">
              <div class="right-side">
                <span class="discount-product">200 ر.س</span>
                <span class="price-product">180 ر.س</span>
                <ul id="stars">
                  <li><a href="#"><i class="flaticon-bookmark-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><span>أضف تقييمك</span></li>
                </ul>
              </div>
            </div>
            <div class="col s6">
              <div class="left-side">
                <ul class="left-align">
                  <li><a href="#"><i class="flaticon-share"></i></a></li>
                  <li><a href="#"><i class="flaticon-repeat"></i></a></li>
                  <li><a href="#"><i class="flaticon-valentines-heart"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="describe-product mt-2">
          <h5>الوصف</h5>
          <ul>
            <li><i class="flaticon-record-button"></i><span>يحمل الهواتف 2.3 - 3.3 "واسعة</span></li>
            <li><i class="flaticon-record-button"></i><span>ترقيات Osmo Grip إلى Osmo Mobile</span></li>
            <li><i class="flaticon-record-button"></i><span>تمكن وسائط التصوير الذكي</span></li>
            <li><i class="flaticon-record-button"></i><span>بانوراما والمزيد</span></li>
            <li><i class="flaticon-record-button"></i><span>تقنية البلوتوث</span></li>
          </ul>
          <!-- <p>عفوآ المنتج غير متوفر الان 
            اضغط على الجرس لاعلامك عندما يتوفر</p> -->
          <div class="notification center-align">
            <a href="#"><img src="../images/016.png" alt=""></a>
          </div>
        </div>
        <img class="responsive-img" style='height: 50px' src="../images/015.png" alt="">
        <div class="last-added">
          <h5 class="similar-products mt-2">منتجات مشابهه</h5>
          <div class="row professional-cam">
            <div class="col s6">
              <div class="repeated-product mt-2">
                <a href="/product/" class="move-product" product-id="8">
                  <img class="responsive-img removing-pic" src="../images/006.png" alt="">
                  <h6 class="digital-cam">كاميرا SLR الرقمية</h6>
                  <span class="discount" id="sting">200 ر.س</span>
                  <span class="price">180 ر.س</span>
                </a>
                <a href="#" class="like-it">
                  <i class="flaticon-like"></i>
                </a>
                <a href="#" class="shop-now">
                  <i class="flaticon-shopping-cart"></i>
                </a>
                <ul class="rating-stars" id="stars">
                  <li><a href="#"><i class="flaticon-bookmark-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                  <li><a href="#"><i class="flaticon-star"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button class="add-basket waves-effect"><i class="flaticon-shopping-cart-1"></i>
          <span>أضف إلى السله</span>
        </button>
      </div>
    </div>
  </f7-page>
</template>

<script>
  export default {}
</script>