<template>
  <div>
    <div>
      <!-- Start Banner Area -->
      <section class="banner-area organic-breadcrumb">
        <div class="container">
          <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
              <h1>Catalog</h1>
            </div>
          </div>
        </div>
      </section>
      <!-- End Banner Area -->

      <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-lg-4 col-md-6" v-for="item in product" :key="item.id">
                  <div class="single-product">
                    <img class="img-fluid max-img-size" :src="item.image" @error="onImageError" :alt="item.name">
                    <div class="product-details">
                      <h2>{{ item.title }}</h2>
                      <p>Author : {{ item.author }}</p>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      fallbackImage: 'img/noimage.png'
    };
  },
  name: 'ProductDetailView',
  mounted() {
    // Call your API and set the response to the 'product' data property
    fetch(`https://fakerapi.it/api/v1/books?_quantity=1`)
      .then(response => response.json())
      .then(data => {
        this.product = data.data;
      });
  },
  methods: {
    onImageError(event) {
      event.target.src = this.fallbackImage;
    }
  }
};
</script>
