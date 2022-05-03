<template lang="pug">
div.MainFrame
    div.NavbarLogoBlock
        span.LogoStyle.btn(@click="this.$router.push('/')") ClothShop
    div.NavbarBlock
        img.btn(src="@/assets/image/basket.svg" @click="this.$router.push('/basket')" v-show="authed == true")
        span.LogoStyle.btn(@click="this.$router.push('/auth')"  v-show="authed == false") Войти
        span.LogoStyle.btn(@click="outFunct()"  v-show="authed == true") Выйти
div.NavbarCatalogBlock
    div.CatalogDivFrame
        div
            span.LogoStyle.btn(@click="this.$router.push('/')") Каталог
        div
            span.LogoStyle.btn(@click="this.$router.push('/sale')") Скидки
    div.CatalogDivFrame
        div
            span.LogoStyle.btn(@click="this.$router.push('/about')") О компании
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      authed: (state) => state.auth.authed,
    }),
  },
  methods:{
    outFunct(){
      const delToken = ""
      this.$store.commit("auth/newToken", delToken);
      this.$store.commit("auth/authExit", false);
      this.$router.push('/auth')
    }
  }
};
</script>

<style scoped>
.btn:hover {
  cursor: pointer;
}
.MainFrame {
  display: flex;
  justify-content: center;
  background: black;
  height: 4vw;
  align-items: center;
}
.LogoStyle {
  color: white;
  font-size: 1.7vw;
}
.CatalogDivFrame {
  display: flex;
  margin-left: 4vw;
  margin-right: 4vw;
  gap: 4vw;
}
.CatalogDiv {
  position: absolute;
  right: 88vw;
  display: flex;
  align-items: center;
  gap: 2vw;
}
.NavbarLogoBlock {
}
.NavbarBlock {
  position: absolute;
  left: 88vw;
  display: flex;
  align-items: center;
  gap: 2vw;
}
.NavbarCatalogBlock {
  display: flex;
  justify-content: space-between;
  background: #540c0c;
  height: 3.2vw;
  align-items: center;
}
</style>
