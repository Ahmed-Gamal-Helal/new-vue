import MyHeaderPage from './pages/myheader.vue';
// import Myfooter from './pages/Myfooter.vue';


// var intro = localStorage.getItem('intro');
import HomePage from './pages/home.vue';
// import IntroPage from './pages/intro.vue';



import AboutPage from './pages/about.vue';
import DivisionPage from './pages/divisions.vue';
import ProfCamPage from './pages/Prof-cameras.vue';
import FavoritesPage from './pages/favorites.vue';
import ComparisonPage from './pages/comparison.vue';
import AccountingPage from './pages/accounting.vue';
import PayOrderPage from './pages/order-pay.vue';
import ProfilePage from './pages/profile.vue';
import OrdersPage from './pages/orders.vue';
import CartPage from './pages/shopping-cart.vue';
import SearchPage from './pages/search.vue';
import ProductPage from './pages/product.vue';
import ForgotPage from './pages/forgot-pass.vue';
import EnterCodePage from './pages/enter-code.vue';
import PassChangePage from './pages/pass-change.vue';
import RegisterPage from './pages/register.vue';
import PhoneNumPage from './pages/phone-number.vue';
import PhoneConfirmPage from './pages/phone-confirm.vue';
import OffersPage from './pages/offers.vue';
import PayingPage from './pages/paying-methods.vue';

import ContactUsPage from './pages/contact-us.vue';

import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/myheader/',
    component: MyHeaderPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/divisions/',
    component: DivisionPage,
  },
  {
    path: '/professional-cameras/',
    component: ProfCamPage,
  },
  {
    path: '/favorites/',
    component: FavoritesPage,
    // toolbar: true,
    // app.toolbar.show(toolbarEl, isAnimated)
  },
  {
    path: '/comparison/',
    component: ComparisonPage,
  },
  {
    path: '/accounting/',
    component: AccountingPage,
  },
  {
    path: '/order-pay/',
    component: PayOrderPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/orders/',
    component: OrdersPage,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '/sopping-cart/',
    component: CartPage,
  },
  {
    path: '/product/',
    component: ProductPage,
  },
  {
    path: '/forgot-pass/',
    component: ForgotPage,
  },
  {
    path: '/enter-code/',
    component: EnterCodePage,
  },
  {
    path: '/pass-change/',
    component: PassChangePage,
  },
  {
    path: '/register/',
    component: RegisterPage,
  },
  {
    path: '/phone-number/',
    component: PhoneNumPage,
  },
  {
    path: '/phone-confirm/',
    component: PhoneConfirmPage,
  },
  {
    path: '/offers/',
    component: OffersPage,
  },
  {
    path: '/paying-methods/',
    component: PayingPage,
  },
  {
    path: '/contact-us/',
    component: ContactUsPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
