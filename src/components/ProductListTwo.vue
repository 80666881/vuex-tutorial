<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{product.name}}</span>
                <span class="price">${{product.price}}</span>
            </li>
        </ul>

    </div>
</template>

<script>
  export default {
    //getCentral store,use computed attribute
    //when we call products,we use the computed method products that return the products in the store's state
    computed:{
      products(){
        return this.$store.state.products;
      }
    }
  }
</script>

