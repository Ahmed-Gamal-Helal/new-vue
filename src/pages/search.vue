<!-- البحث -->
<template id="page-search">
  <f7-page>
    <f7-navbar title="البحث" back-link="Back"></f7-navbar>
    <div class="format">
      <div class="container">
        <form action="/search-result/" class="pd-2">
          <f7-list-item class="form-group">
            <input type="text" placeholder="كلمة البحث">
            <i class='flaticon-search'></i>
          </f7-list-item>
          <f7-list-item title="depart-one" smart-select :smart-select-params="{openIn: 'popover'}">
            <select name="">
              <option value="depart" selected>القسم</option>
              <option value="first">الاول</option>
              <option value="second">التانى</option>
            </select>
            <i class='flaticon-plus'></i>
          </f7-list-item>
          <f7-list-item title="depart-two" smart-select :smart-select-params="{openIn: 'popover'}">
            <select name="">
              <option value="depart" selected>القسم الفرعى</option>
              <option value="first">الاول</option>
              <option value="second">التانى</option>
            </select>
            <i class='flaticon-plus'></i>
          </f7-list-item>
          <div class="center-align mt-3">
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