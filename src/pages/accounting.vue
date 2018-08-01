<!-- الحسابات البنكيه -->
<template>
  <f7-page>
    <f7-navbar title="الحسابات البنكيه" back-link="Back"></f7-navbar>
    <div class="format">
      <div class="container">
        <div class="row">
          <div class="col s6">
            <div class="bank-example mt-2">
              <img class="responsive-img" src="../images/010.png" alt="">
              <ul>
                <li>رقم الحساب : <span>54325565201</span></li>
                <li>الاسم : <span>محمد عبده</span></li>
              </ul>
            </div>
          </div>
          <div class="col s6">
            <div class="bank-example mt-2">
              <img class="responsive-img" src="../images/011.png" alt="">
              <ul>
                <li>رقم الحساب : <span>54325565201</span></li>
                <li>الاسم : <span>محمد عبده</span></li>
              </ul>
            </div>
          </div>
        </div>
        <form action="" class="pd-2">
          <div class="form-group">
            <input type="number" placeholder="رقم الطلب">
            <i class='flaticon-checklist-2'></i>
          </div>
          <div class="form-group">
            <input type="number" placeholder="رقم الجوال">
            <i class='flaticon-smartphone'></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="البنك المحول منه">
            <i class='flaticon-bank'></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="البنك المحول إليه">
            <i class='flaticon-bank'></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="اسم المحول">
            <i class='flaticon-user-1'></i>
          </div>
          <div class="form-group">
            <input type="number" placeholder="المبلغ">
            <i class='flaticon-funds'></i>
          </div>
          <div class="center-align mt-2 mar-b">
            <button class="enter-button waves-effect">دخول</button>
          </div>
        </form>
      </div>
    </div>
  </f7-page>
</template>

<script>
    export default {}
</script>