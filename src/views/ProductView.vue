<template>
  <div class="home">
    <HeadComponent/>
    <HeaderComponent/>
    <ProductComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadComponent from '@/components/HeadComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProductComponent from '@/components/ProductComponent.vue'

export default {
  name: 'ProductView',
  components: {
    HeadComponent,
    HeaderComponent,
    ProductComponent
  }
};
</script>
