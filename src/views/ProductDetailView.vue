<template>
  <div class="home">
    <HeadComponent/>
    <HeaderComponent/>
    <ProductDetailComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadComponent from '@/components/HeadComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProductDetailComponent from '@/components/ProductDetailComponent.vue'

export default {
  name: 'ProductDetailView',
  components: {
    HeadComponent,
    HeaderComponent,
    ProductDetailComponent
  }
};
</script>
