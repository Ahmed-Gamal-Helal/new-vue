<!-- الطلب والدفع -->
<template>
  <div class="page pay-order">
    <f7-navbar title="الطلب والدفع" no-shadow back-link="Back"></f7-navbar>

      <div class=" tabbar no-shadow" style="height: 140px;">
        <div class="toolbar-inner">
          <a href="#tab-1" class="tab-link tab-link-active">
            <i class="flaticon-verification-of-delivery-list-clipboard-symbol"></i>
            <span>معلومات الطلب</span>
          </a>
          <a href="#tab-2" class="tab-link">
            <i class="flaticon-user-1"></i>
            <span>معلومات العميل</span>
          </a>
        </div>
      </div>
      <div class="tabs-swipeable-wrap container">
        <div class="tabs">
          <div id="tab-1" class="page-content tab tab-active">
            <div class="block order-info">
              <h5>حامل كاميرا سونى</h5>
              <span class="discount" id="sting">200 ر.س</span>
              <span class="price">180 ر.س</span>
              <ul>
                <li>كود : <span>504</span></li>
                <li>الحاله : <span class="processing">جارى التجهيز</span></li>
                <li>طرق الدفع : <span>الدفع عند الاستلام</span></li>
                <li>الكميه : <span>2</span></li>
                <li>تكلفة الشحن : <span>20 ر.س</span></li>
                <li>قيمة الضريبه : <span>20 ر.س</span></li>
              </ul>
              <div class="total-price center-align">
                الاجمالى : <span>250 ر.س</span>
              </div>
              <div class="img-production">
                <img class="responsive-img" src="../images/006.png" alt="">
              </div>
            </div>
          </div>
          <div id="tab-2" class="page-content tab tabShow">
            <div class="block agent-info">
            <h5 class="naming">محمد على احمد</h5>
            <ul>
              <li>البريد الالكترونى : <span>info@mohamed.com</span></li>
              <li>الجوال : <span>+966123456789</span></li>
              <li>الدوله : <span>السعوديه</span></li>
              <li>المدينه : <span>الرياض</span></li>
              <li>العنوان : <span>الرياض, شارع المعز الاحمدى</span></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {}
</script>
