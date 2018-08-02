<template>
    <f7-page>
        <f7-navbar title="تغيير كلمة المرور" back-link="Back" no-shadow no-hairline>
            <img src="../images/005.png" alt="">
        </f7-navbar>
        <div class="format intro-steps pt-4">
            <div class="container">
                <!-- تسجيل الدخول -->
                <form action="">
                    <div class="form-group">
                        <input type="password" placeholder="كلمة المرور">
                        <i class='flaticon-locked'></i>
                    </div>
                    <div class="form-group">
                        <input type="password" placeholder="كلمة المرور">
                        <i class='flaticon-locked'></i>
                    </div>
                    <f7-list class="center-align mt-2">
                        <f7-list-button class="enter-button waves-effect" title="دخول" login-screen-close></f7-list-button>
                    </f7-list>
                </form>
            </div>
        </div>
    </f7-page>
</template>
