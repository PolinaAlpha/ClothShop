<template lang="pug">
div.MainFrame
    div.DisplayStyle
        div    
            img(src="@/assets/ru.jpg").ImgStyle
        div.TextStyle
            span.SpanStile -20%
    div.DisplayStyle
        div    
            img(src="@/assets/ob.jpg").ImgStyle 
        div.TextStyle
            span.SpanStile -25%
    div.DisplayStyle
        div    
            img(src="@/assets/ac.jpg").ImgStyle
        div.TextStyle
            span.SpanStile -30%
</template>

<script>
export default {

}
</script>

<style scoped>
.MainFrame{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    height: 30vw;
    justify-items: center;
    align-items: center;
}
.SpanStile{
    color: white;
    font-size: 2vw;
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
    width: 100%;
}
</style>