<template lang="pug">
div.BasketStyle.SpanStile
    div.AdressStyle
        span Адрес
        input(v-model="adress").InputStyle
    div.AdressStyle
        span {{summary}}
        button.ButtonOrderStyle.SumStyle(@click="submitOrder()") Оформить заказ
div.MainFrame
    div.DisplayStyle(v-for="(item,index) in order")
        div    
            img(:src="require(`@/assets/items/${item.itemImgId}.jpg`)").ImgStyle
        div.TextStyle
            span.DescriptionStyle {{item.itemName}}
            span.DescriptionStyle {{item.itemPrice}} ₽
            span.DescriptionStyle {{item.itemSize[0].size}}
            div.DescriptionStyle Количество
                button.ButtonCountStyle(@click="countEdit(-1,index )") -
                span {{item.itemCount}}
                button.ButtonCountStyle(@click="countEdit(1,index )") +
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            summary: 0,
            adress: ""
        }
    },
    methods: {
        countEdit(Num, index){
            if(this.order[index].itemCount == 1 && Num == -1){
                this.order.splice(index,1)
            }else{
                this.order[index].itemPrice = this.order[index].itemPrice + (this.order[index].itemPrice/this.order[index].itemCount)*Num
                this.order[index].itemCount = this.order[index].itemCount + Num
            }
            this.sumPrice()
        },
        sumPrice(){
            const ArraySize = this.order.length
            let perem = 0
            for(let i = 0; i < ArraySize; i++){
                perem = perem + this.order[i].itemPrice
            }
            this.summary = perem
        },
        async submitOrder(){
            const response = await fetch("auth/createorder", {
                method: "POST",
                headers: {
                     "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    itemsList: this.order,
                    userAdress: this.adress,
                    itemSummary: this.summary
                })
            });
            const json = await response.json()
            alert(json.message)
        }
    },
    mounted(){
        this.sumPrice()
    },
    computed: {
    ...mapState({
      order: (state) => state.order.basketItems,
      token: (state) => state.auth.token
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
    font-size: 2vw;
}
.DescriptionStyle{
    display: flex;
    color: white;
    font-size: 1vw;
    gap: 1vw;
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
    height: 30%;
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
.NavbarBlock{
    position: absolute;
    left: 88vw;
    display: flex;
    align-items: center;
    gap: 2vw;
    background-color: black;
}
.BasketStyle{
     display: flex;
    justify-content: space-between;
    background: #737373;
    height: 5vw;
    align-items: center;
    justify-content: space-evenly
}
.ButtonOrderStyle{
    color: white;
    background: #540C0C;
    padding: 0.7vw;
    margin-bottom: 0vw;
    font-size: 1vw;
}
.InputStyle{
    margin-left: 3vw;
    margin-right: 3vw;
    height: 1vw;
}
.SumStyle{
    margin-left: 3vw;
    margin-right: 3vw;
}
.AdressStyle{
    display: flex;
    align-items: center
}
.ButtonCountStyle{
    color: white;
    background: #000000;
}
</style>