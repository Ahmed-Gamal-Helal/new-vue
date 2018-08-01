<template>
    <f7-page>
        <f7-navbar title="التسجيل" back-link="Back" no-shadow no-hairline>
            <img src="../images/005.png" alt="">
        </f7-navbar>
        <div class="format intro-steps">
            <div class="container">
                <form action="">
                    <div class="form-group">
                        <input type="text" placeholder="الإسم">
                        <i class='flaticon-user-2'></i>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="البريد الإلكترونى">
                        <i class='flaticon-email'></i>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="كلمة المرور">
                        <i class='flaticon-locked'></i>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="تأكيد كلمة المرور">
                        <i class='flaticon-locked'></i>
                    </div>
                    <f7-list class="center-align mt-2">
                        <f7-list-button class="enter-button waves-effect" title="دخول" login-screen-close></f7-list-button>
                    </f7-list>
                    <p class="center-align no-account"><span>لدى حساب</span><a href="#"> تسجيل الدخول</a></p>
                </form>
            </div>
        </div>
    </f7-page>
</template>