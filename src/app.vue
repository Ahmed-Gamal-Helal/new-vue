<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Right Panel -->
    <f7-panel right cover theme-light>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main>
      <f7-toolbar class="toolbar-bottom-md">
        <div class="container-fluid">
          <div class="row">
            <div class="col s3">
              <div class="foot-item center-align">
                <a href="/">
                  <i class="flaticon-home"></i>
                  <h6>الرئيسيه</h6>
                </a>
              </div>
            </div>
            <div class="col s3">
              <div class="foot-item center-align">
                <a href="/profile/">
                  <i class="flaticon-user"></i>
                  <h6>حسابى</h6>
                </a>
              </div>
            </div>
            <div class="col s3">
              <div class="foot-item center-align">
                <a href="/favorites/">
                  <i class="flaticon-like"></i>
                  <h6>مفضلتى</h6>
                </a>
              </div>
            </div>
            <div class="col s3">
              <div class="foot-item center-align">
                <a href="/offers/">
                    <i class="flaticon-tag"></i>
                    <h6>العروض</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </f7-toolbar>
    </f7-view>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view id="form-views">
        <f7-page login-screen>
            <f7-navbar title="تسجيل الدخول" no-shadow no-hairline>
              <img src="./images/005.png" alt="">
            </f7-navbar>

          <div class="format intro-steps">
            <div class="container">
              
              <!-- تسجيل الدخول -->
              <form action="">
                <div class="form-group">
                  <input type="email" placeholder="البريد الإلكترونى">
                  <i class='flaticon-email'></i>
                </div>
                <div class="form-group">
                  <input type="password" placeholder="كلمة المرور">
                  <i class='flaticon-locked'></i>
                </div>
                <div class="form-group">
                  <a href="/forgot-pass/" view="#form-views">نسيت كلمة المرور ؟</a>
                </div>
                <div class="remember-me center-align">
                  <input type="checkbox" class="filled-in" id="checkboxid">
                  <label for="checkboxid">تذكرنى دائما</label>
                </div>
                <f7-list class="center-align">
                    <f7-list-button class="enter-button waves-effect" title="دخول" login-screen-close></f7-list-button>
                </f7-list>
                <p class="center-align no-account"><span>ليس لدى حساب </span><a href="/phone-number/"> تسجيل الان</a></p>
              </form>
            </div>
          </div>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>

<script>
// Import Routes
import routes from './routes.js'

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: routes,
      },
    }
  }
}
</script>
