<!-- الطلب والدفع -->
<template>
  <div class="page">
    <f7-navbar title="طرق الدفع" no-shadow back-link="Back"></f7-navbar>

      <div class="toolbar tabbar no-shadow">
        <div class="toolbar-inner">
          <a href="#tab-3" class="tab-link tab-link-active">الدفع عند الإستلام</a>
          <a href="#tab-4" class="tab-link">تحويل بنكى</a>
          <a href="#tab-5" class="tab-link">بطاقة الإئتمان</a>
        </div>
      </div>
      <div class="tabs-swipeable-wrap container">
        <div class="tabs">
          <div id="tab-3" class="page-content tab tab-active">
            <div class="format mt-2">
              <form action="">
                <f7-list-item class="form-group">
                  <input type="text" placeholder="الاسم الاول">
                  <i class='flaticon-user-2'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="text" placeholder="الاسم الثانى">
                  <i class='flaticon-user-2'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="email" placeholder="البريد الإلكترونى">
                  <i class='flaticon-email'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="text" placeholder="العنوان">
                  <i class='flaticon-pin'></i>
                </f7-list-item>
                <f7-list-item title="depart-one" smart-select :smart-select-params="{openIn: 'popover'}">
                  <select name="">
                    <option value="depart" selected>الدوله</option>
                    <option value="first">مصر</option>
                    <option value="second">بنها</option>
                  </select>
                  <i class='flaticon-skyline'></i>
                </f7-list-item>
                <f7-list-item title="depart-two" smart-select :smart-select-params="{openIn: 'popover'}">
                  <select name="">
                    <option value="depart" selected>المدينه</option>
                    <option value="first">دمياط</option>
                    <option value="second">الهند</option>
                  </select>
                  <i class='flaticon-skyline'></i>
                </f7-list-item>
                <f7-list-item title="depart-two" smart-select :smart-select-params="{openIn: 'popover'}">
                  <select name="">
                    <option value="depart" selected>وسيلة الشحن</option>
                    <option value="first">عربيه</option>
                    <option value="second">عجله</option>
                  </select>
                   <i class='flaticon-shipped'></i>
                </f7-list-item>
                <button class="add-basket waves-effect mt-2 absolute-state">
                  <span>اتمام عملية الشراء</span>
                </button>
              </form>
            </div>
          </div>
          <div id="tab-4" class="page-content tab tabShow">
            <div class="format mt-2">
              <form action="">
                <f7-list-item class="form-group">
                  <input type="number" placeholder="رقم الطلب">
                  <i class='flaticon-checklist-2'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="number" placeholder="رقم الجوال">
                  <i class='flaticon-smartphone'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="text" placeholder="البنك المحول منه">
                  <i class='flaticon-bank'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="text" placeholder="البنك المحول إليه">
                  <i class='flaticon-bank'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="text" placeholder="اسم المحول">
                  <i class='flaticon-user-1'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="number" placeholder="المبلغ">
                  <i class='flaticon-funds'></i>
                </f7-list-item>
                <button class="add-basket waves-effect mt-2 absolute-state">
                  <span>اتمام عملية الشراء</span>
                </button>
              </form>
            </div>
          </div>
          <div id="tab-5" class="page-content tab tabShow">
            <div class="format mt-2">
              <form action="">
                <f7-list-item class="form-group">
                  <input type="number" placeholder="رقم الطلب">
                  <i class='flaticon-checklist-2'></i>
                </f7-list-item>
                <f7-list-item class="form-group">
                  <input type="number" placeholder="رقم الجوال">
                  <i class='flaticon-smartphone'></i>
                </f7-list-item>
                <button class="add-basket waves-effect mt-2 absolute-state">
                  <span>اتمام عملية الشراء</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {}
</script>
