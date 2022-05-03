export const choiceModule = {
    state: () => ({
      choice: 0,
      choiceProduct: 0,
      allItems: {
        ItemArray: [

        ]
    }
    }),
    mutations: {
      choiceEdit(state, exit){
          state.choice = exit;
      },
      ItemArrayEdit(state, exit){
        state.allItems.ItemArray = exit
      },
      choiceProductEdit(state, exit){
        state.choiceProduct = exit
      }
    },
    getters: {
    },
    namespaced: true
}