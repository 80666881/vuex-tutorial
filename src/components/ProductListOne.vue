<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    computed: {
      products(){
        return this.$store.state.products;
      },
      ...mapGetters([
        'saleProducts'
//        'yourNextOne'
      ])
    },
    methods:{
      ...mapActions([
          'reducePrice'
//         'yourNextOne'
      ])
    }
  }
</script>
