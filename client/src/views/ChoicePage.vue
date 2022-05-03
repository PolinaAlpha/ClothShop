<template lang="pug">
div.MainFrame()
    div.DisplayStyle(v-for="(item, index) in  allItems.ItemArray" v-show="allItems.ItemArray[index].itemCategory == choice" @click="choiceProduct(index)")
        div    
            img(:src="require(`@/assets/items/${item.itemImgId}.jpg`)").ImgStyle
        div.TextStyle
            span.SpanStile {{item.itemName}}
            span.SpanStile {{item.itemPrice}} ₽
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
        }
    },
    methods: {
        coiceNum(Num){
            this.coiceNum = Num
        },
        choiceProduct(Num){
            this.$store.commit("choice/choiceProductEdit", Num);
            this.$router.push("/product")
        }
    },
    computed: {
    ...mapState({
      choice: (state) => state.choice.choice,
      allItems: (state) => state.choice.allItems
    }),
  },
}
</script>

<style scoped>
.MainFrame{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #540C0C;
}
.ImgStyle{
    width: 100%;
}
</style>