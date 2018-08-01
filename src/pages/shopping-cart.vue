<!-- سلة الشراء -->
<template>
  <f7-page>
    <f7-navbar title="سلة الشراء" back-link="Back"></f7-navbar>
    <div class="last-added">
      <div class="container">
        <ul class="row professional-cam">
          <li class="col s12 swipeout mt-2">
            <div class="repeated-product swipeout-content">
              <a href="/product/" class="move-product item-content item-link" product-id="4">
                <img class="responsive-img removing-pic-abs" src="../images/006.png" alt="">
                <h6 class="digital-cam margin-30-per">كاميرا SLR الرقمية</h6>
                <span class="price margin-30-per">180 ر.س</span>
                <p class="code-num margin-30-per">كود : 799</p>
              </a>
              <f7-stepper round></f7-stepper>
              <div class="swipeout-actions-right">
                <a href="/product/" class="move-product swipeout-delete" product-id="5">Delete</a>
              </div>
            </div>
          </li>
          <li class="col s12 swipeout mt-2">
            <div class="repeated-product swipeout-content">
              <a href="/product/" class="move-product item-content item-link" product-id="6">
                <img class="responsive-img removing-pic-abs" src="../images/006.png" alt="">
                <h6 class="digital-cam margin-30-per">كاميرا SLR الرقمية</h6>
                <span class="price margin-30-per">180 ر.س</span>
                <p class="code-num margin-30-per">كود : 799</p>
              </a>
              <f7-stepper round></f7-stepper>
              <div class="swipeout-actions-right">
                <a href="#" class="swipeout-delete">Delete</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="basket-div">
      <div class="contain-basket">
        <div class="row">
          <div class="col s6">
            <div class="total-price">
              <span>المجموع الكلى</span>
            </div>
          </div>
          <div class="col s6">
            <div class="total-price-num left-align">
              <span>499 ر.س</span>
            </div>
          </div>
        </div>
        <button class="add-basket waves-effect"><i class="flaticon-shopping-cart-1"></i>
          <!-- <span>أضف إلى السله</span> -->
          <span>اتمام عملية الشراء</span>
        </button>
      </div>
    </div>
  </f7-page>
</template>