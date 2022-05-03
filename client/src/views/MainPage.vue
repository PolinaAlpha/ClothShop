<template lang="pug"> 
div.MainFrame
    div.DisplayStyle(@click="choicePage(0)")
        div    
            img(src="@/assets/vo.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Верхняя одежда
    div.DisplayStyle(@click="choicePage(1)")
        div    
            img(src="@/assets/ru.jpg").ImgStyle 
        div.TextStyle
            span.SpanStile Рубашки
    div.DisplayStyle(@click="choicePage(2)")
        div    
            img(src="@/assets/dj.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Джинсы
    div.DisplayStyle(@click="choicePage(3)")
        div    
            img(src="@/assets/pl.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Платья
    div.DisplayStyle(@click="choicePage(4)")
        div    
            img(src="@/assets/fu.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Футболки
    div.DisplayStyle(@click="choicePage(5)")
        div    
            img(src="@/assets/sv.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Свитшоты
    div.DisplayStyle(@click="choicePage(6)")
        div    
            img(src="@/assets/ob.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Обувь
    div.DisplayStyle(@click="choicePage(7)")
        div    
            img(src="@/assets/ac.jpg").ImgStyle
        div.TextStyle
            span.SpanStile Аксессуары
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        choicePage(Num){
           this.$store.commit("choice/choiceEdit", Num);
           this.$router.push("/choice")
           
        },
        async getAllItems(){
            const response = await fetch("auth/items", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const json = await response.json()
            this.$store.commit("choice/ItemArrayEdit", json.getItem);
        } 
    },
    mounted() {
        this.getAllItems()
    }
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