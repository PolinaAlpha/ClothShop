<template lang="pug">
div.MainFrame
    div.NavbarLogoBlock
        span.LogoStyle ClothShop
    div.NavbarBlock
        img(src="@/assets/image/basket.svg")
        span.LogoStyle Войти
div.NavbarCatalogBlock
    div.CatalogDivFrame
        div
            span.LogoStyle Каталог
        div
            span.LogoStyle Скидки
    div.CatalogDivFrame
        div
            span.LogoStyle О компании
</template>

<script>
export default {

}
</script>

<style scoped>
.MainFrame {
  display: flex;
  justify-content: center;
  background: black;
  height: 4vw;
  align-items: center;
}
.LogoStyle{
    color: white;
    font-size: 1.7vw;
}
.CatalogDivFrame{
    display: flex;
    margin-left: 4vw;
    margin-right: 4vw;
    gap: 4vw;
}
.CatalogDiv{
position: absolute;
    right: 88vw;
    display: flex;
    align-items: center;
    gap: 2vw;
}
.NavbarLogoBlock{

}
.NavbarBlock{
    position: absolute;
    left: 88vw;
    display: flex;
    align-items: center;
    gap: 2vw;
}
.NavbarCatalogBlock{
    display: flex;
    justify-content: space-between;
    background: #540C0C;
    height: 3.2vw;
    align-items: center;
}
</style>