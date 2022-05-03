import { createStore } from 'vuex';
import { authModule } from './authModule.js';
import { choiceModule } from './choiceModule.js';
import { orderModule } from './orderModule.js';
export default createStore({
  state: {
    
  },
  
  modules: {
    auth: authModule,
    choice: choiceModule,
    order: orderModule
  }
})