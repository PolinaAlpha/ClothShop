<template lang="pug">
div.MainFrame
    div.DisplayStyle.SpanStile 
        span Адрес: г. Благовещенскул, ул. Мухина, 114, 2 этаж
        span Телефон: 84162990990
        span Почта: ClothShop@mail.ru
        span Режим работы: Понедельник-пятница - с 9:00 до 18:00
        span Суббота-воскресенье - Выходной
</template>

<script>
export default {

}
</script>

<style scoped>
.MainFrame{
    height: 20vw;
    justify-items: center;
    align-items: center;
}
.DisplayStyle{
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 4vw;
    background: #737373;
    gap: 1vw;
}
.SpanStile{
    color: white;
    font-size: 1.5vw;
}
</style>