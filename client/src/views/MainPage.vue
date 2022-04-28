<template lang="pug"> 
div.MainFrame
    div.DisplayStyle
        div    
            img(src="@/assets/vo.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Верхняя одежда
    div.DisplayStyle
        div    
            img(src="@/assets/ru.jpg").ImgStyle 
        div.TextStyle
            span.SpanStile Рубашки
    div.DisplayStyle
        div    
            img(src="@/assets/dj.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Джинсы
    div.DisplayStyle
        div    
            img(src="@/assets/pl.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Платья
    div.DisplayStyle
        div    
            img(src="@/assets/fu.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Футболки
    div.DisplayStyle
        div    
            img(src="@/assets/sv.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Свитшоты
    div.DisplayStyle
        div    
            img(src="@/assets/ob.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Обувь
    div.DisplayStyle
        div    
            img(src="@/assets/ac.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Аксессуары
</template>

<script>
export default {

}
</script>

<style scoped>
.MainFrame{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    height: 40vw;
    justify-items: center;
    align-items: center;
}
.SpanStile{
    color: white;
    font-size: 1vw;
}
.DisplayStyle{
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90%;
    justify-content: end;
    align-items: center;
}
.TextStyle{
    text-align: center;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #540C0C;
}
.ImgStyle{
    width: 15vw;
}
</style>