<!-- الصفحه الشخصيه -->
<template id="page-profile">
  <f7-page>
    <f7-navbar title="الصفحه الشخصيه" back-link="Back"></f7-navbar>
    <div class="format">
      <div class="container">
        <form action="" class="pd-2">
          <div class="form-group">
            <input type="text" placeholder="الإسم" value="محمود">
            <i class='flaticon-user-2'></i>
            <a href="#" class="edit-things"><i class="flaticon-edit-document"></i></a>
          </div>
          <div class="form-group">
            <input type="email" placeholder="البريد الإلكترونى" value="abdo@gmail.com">
            <i class='flaticon-email'></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="كلمة المرور" value="8790">
            <i class='flaticon-locked'></i>
            <a href="#" class="edit-things"><i class="flaticon-edit-document"></i></a>
          </div>
          <div class="form-group">
            <input type="text" placeholder="رقم الجوال" value="+969899098790">
            <i class='flaticon-smartphone'></i>
            <a href="#" class="edit-things"><i class="flaticon-edit-document"></i></a>
          </div>
          <div class="center-align mt-2">
            <button class="enter-button waves-effect">تعديل و حفظ</button>
          </div>
        </form>
      </div>
    </div>
  </f7-page>
</template>