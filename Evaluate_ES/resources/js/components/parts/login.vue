<template>
  <div id="login">
    <img src="../../../assets/Evaluate.png" alt="">
      <p>تقييم</p>
      <form action="">
        <h2>تسجيل الدخول</h2>
        <input type="text" placeholder="ادخل رقمك الجامعي">
        <input type="password" placeholder="ادخل كلمة المرور">
        <input type="checkbox">
        <label>تذكرني</label>
        <buttton>تسجيل الدخول</buttton>
        <router-link to="/">
          نسيت كلمة المرور؟
        </router-link>
      </form>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>
