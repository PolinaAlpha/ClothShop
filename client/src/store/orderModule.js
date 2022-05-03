export const orderModule = {
    state: () => ({
      basketItems: []
    }),
    mutations: {
      basketEdit(state,res){
          state.basketItems.push(res)
      }
    },
    getters: {
    },
    namespaced: true
}