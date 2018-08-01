<template>
    <nav class="lighten-1">
        <f7-link id="logo-container" href="/" class="brand-logo" view="#main-view-show" panel-close>
            <img class="responsive-img" src="images/005.png" alt="">
        </f7-link>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="main-list-two" class="right login s-menu"></f7-link>
        <f7-link href="/search/" icon-only="true" view="#main-view-show" class="left login" panel-close><i class="flaticon-search"></i></f7-link>
        <f7-link href="/sopping-cart/" icon-only="true" view="#main-view-show" class="left login cart" panel-close><i class="flaticon-shopping-cart"></i><span>99</span></f7-link>
    </nav>
</template>
