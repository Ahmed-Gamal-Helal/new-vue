// Import Vue
import Vue from 'vue';
// import VueRouter from 'vue-router';


// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Materialize and Jquery
import JqueryApp from './jquery.min.js';
// import MaterializeApp from './materialize.min.js';

// Import F7 Styles
// import Framework7Styles from 'framework7/css/framework7.md.min.css';
import Framework7StylesTwo from 'framework7/css/framework7.rtl.md.min.css';
// import Framework7StylesThree from 'framework7/css/framework7.ios.min.css';
import Framework7StylesFour from 'framework7/css/framework7.rtl.ios.min.css';

// Import Icons and App Custom Styles
import Materialize from './css/materialize.min.css';
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import App Component
import App from './app';
import Myfooter from './pages/Myfooter';
// Init F7 Vue Plugin
Framework7.use(Framework7Vue)
// Vue.use(VueRouter)
// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  
  // Register App Component
  components: {
    app: App
  }
});

// Jquery
$(document).on("click", ".move-product", function() {
  var product_id = $(this).attr("product-id");
  console.log(product_id);
});