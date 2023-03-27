<template>
  <div class="home">
    <HeadComponent/>
    <HeaderComponent/>
    <CartComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadComponent from '@/components/HeadComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import CartComponent from '@/components/CartComponent.vue'

export default {
  name: 'CartView',
  components: {
    HeadComponent,
    HeaderComponent,
    CartComponent
  }
}
</script>
