<template>
  <f7-page>
    <f7-navbar title="تواصل معنا" back-link="Back" sliding></f7-navbar>
    <div class="container">
      <div class="format mt-2">
        <form action="">
          <f7-list-item class="form-group">
            <input type="text" placeholder="الاسم">
            <i class='flaticon-user-2'></i>
          </f7-list-item>
          <f7-list-item class="form-group">
            <input type="email" placeholder="البريد الإلكترونى">
            <i class='flaticon-email'></i>
          </f7-list-item>
          <f7-list-item class="form-group">
            <input type="number" placeholder="رقم الجوال">
            <i class="flaticon-smartphone"></i>
          </f7-list-item>
          <f7-list-item class="form-group">
            <textarea name="" id="" cols="30" rows="7" placeholder="الرساله"></textarea>
          </f7-list-item>
          <div class="center-align mt-3">
            <button class="enter-button waves-effect">ارسال</button>
          </div>
        </form>
      </div>
    </div>
  </f7-page>
</template>
