<template lang="pug">
div.MainFrame
    div.DisplayStyle   
        img(:src="require(`@/assets/items/${allItems.ItemArray[choiceProduct].itemImgId}.jpg`)").ImgStyle
    div.TitleStyle
        span.SpanStile.TextStyle {{allItems.ItemArray[choiceProduct].itemName}}
        span.DescriptionStyle
            span.OtstupStyle {{allItems.ItemArray[choiceProduct].itemDescription}}
            div
                div
            div
                span.OtstupStyle Выбор размера
                button.OtstupStyle.ButtonSizeStyle(v-for="(item, index) in  allItems.ItemArray[choiceProduct].itemSize" @click="choiceSize = item.size") {{item.size}}
            div   
                button.OtstupStyle.ButtonBasketStyle(@click="addBasket(choiceProduct, allItems.ItemArray[choiceProduct]._id)") В корзину
                span.OtstupStyle.PriceStyle {{allItems.ItemArray[choiceProduct].itemPrice}} ₽
            div
                div
            div
                div
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            choiceSize: ""
        }
    },
    methods: {
        addBasket(choiceProduct, id){
            const thisItem = {
                _id: this.allItems.ItemArray[choiceProduct]._id,
                itemName: this.allItems.ItemArray[choiceProduct].itemName,
                itemCategory: this.allItems.ItemArray[choiceProduct].itemCategory,
                itemDescription: this.allItems.ItemArray[choiceProduct].itemDescription,
                itemImgId: this.allItems.ItemArray[choiceProduct].itemImgId,
                itemPrice: this.allItems.ItemArray[choiceProduct].itemPrice,
                itemCount: 1,
                itemSize: [{size: this.choiceSize}]
            }
            const ArraySize = this.order.length
            let perem = 0
            for(let i = 0; i < ArraySize; i++){
                if(this.order[i]._id == id){
                  this.order[i].itemPrice = this.order[i].itemPrice + (this.order[i].itemPrice/this.order[i].itemCount)
                  this.order[i].itemCount++
                 perem = perem+1
                }
            }
            if(perem == 0){
                this.$store.commit("order/basketEdit", thisItem);
            }
              
        }
    },
    computed: {
    ...mapState({
      choiceProduct: (state) => state.choice.choiceProduct,
      allItems: (state) => state.choice.allItems,
      order: (state) => state.order.basketItems,
    }),
  },
}
</script>

<style scoped>
.TitleStyle{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    justify-content: space-between;
}
.MainFrame{
    display: grid;
    grid-template-columns: 50% 50%;
    height: 35vw;
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
    justify-content: flex-start;
    align-items: center;
}
.TextStyle{
    text-align: center;
    height: 10%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #540C0C;
}
.ImgStyle{
    width: 105%;
}
.DescriptionStyle{
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    justify-content: space-around;
    margin-top: 4vw;
    background: #737373;
    gap: 1vw;
    color: white;
    font-size: 1vw;
}
.OtstupStyle{
    margin-left: 3vw;
}
.ButtonSizeStyle{
    color: white;
    background: #540C0C;
    width: 2vw;
    height: 1.5vw;
}
.ButtonBasketStyle{
    color: white;
    background: #540C0C;
    width: 6vw;
    height: 2vw;
    margin-bottom: 0vw;
}
.PriceStyle{
    font-size: 1.5vw;
}

</style>