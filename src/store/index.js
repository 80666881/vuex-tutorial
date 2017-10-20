import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map((product) => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  //mutations可以通过vue-devtool进行跟踪
  mutations: {
    reducePrice: (state,payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      })
    }
  },
  actions:{
    //context是上下文，这里类似store
    reducePrice:(context,payload)=>{
      setTimeout(function () {
        context.commit('reducePrice',payload)
      },2000)
    }
  }
})
