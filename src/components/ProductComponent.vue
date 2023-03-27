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

      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="d-flex justify-content-end">
              <!-- Add a search input field -->
              <input type="text" v-model="searchQuery" placeholder="Search for a book...">
              
              <!-- Add a dropdown to select the sort order -->
              <label>Sort By :</label>
              <select v-model="sortOrder">
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
            </div>

            <!-- Start Best Seller -->
            <section class="lattest-product-area pb-40 category-list">
              <div class="row">
                <!-- single product -->
                <div class="col-lg-4 col-md-6" v-for="item in filteredProducts" :key="item.id">
                  <div class="single-product">
                    <img class="img-fluid max-img-size" :src="item.image" @error="onImageError" :alt="item.name">
                    <div class="product-details">
                      <a class="text-dark" style="font-size: 20px;" :href="'/product/' + item.id">{{ item.title }}</a>
                      <p>Author : {{ item.author }}</p>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- End Best Seller -->
            <!-- Add pagination here -->
        <nav class="pagination justify-content-center">
         <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
              <a class="page-link" href="#" @click.prevent="prevPage()">Previous</a>
            </li>
            <li class="page-item" v-for="pageNumber in pageCount" :key="pageNumber" :class="{ active: pageNumber === currentPage }">
              <a class="page-link" href="#" @click.prevent="setCurrentPage(pageNumber)">{{ pageNumber }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
              <a class="page-link" href="#" @click.prevent="nextPage()">Next</a>
            </li>
          </ul>
        </nav>
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
      products: [],
    searchQuery: '',
    sortOrder: 'title',
    fallbackImage: 'img/noimage.png',
    currentPage: 1,
    itemsPerPage: 6,
    pageCount: 0 // Define pageCount in data
    };
  },
  name: 'ProductView',
  mounted() {
    // Call your API and set the response to the 'products' data property
    fetch(`https://fakerapi.it/api/v1/books?page=${this.currentPage}`)
      .then(response => response.json())
      .then(data => {
        this.products = data.data;
         this.pageCount = Math.ceil(this.products.length / this.itemsPerPage);
      });
  },
  methods: {
    onImageError(event) {
      event.target.src = this.fallbackImage;
    },
    prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
},
nextPage() {
  if (this.currentPage < this.pageCount) {
    this.currentPage++;
  }
}
  },
 computed: {
  filteredProducts() {
    // Create a copy of the original products array using slice
    const productsCopy = this.products.slice();

    // Filter the products by the search query
    let filteredProducts = productsCopy.filter(product => {
      return product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.author.toLowerCase().includes(this.searchQuery.toLowerCase());
    });

    // Sort the filtered products by the selected sort order
    if (this.sortOrder === 'title') {
      filteredProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortOrder === 'author') {
      filteredProducts = filteredProducts.sort((a, b) => a.author.localeCompare(b.author));
    }

    // Return the filtered and sorted products
    return filteredProducts;
  }
}


};
</script>
