<template>
  <h1>Meal App</h1>
  <hr />

  <Category
    v-for="category in categories"
    v-bind:key="category.idCategory"
    v-bind:category="category"
  />
</template>

<script>
import Category from "@/components/Category.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Category,

  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log(res.data.categories);
        //Estos son los elementos del objeto que llamaremos : idCategory strCategory strCategoryThumb strCategoryDescription
        this.categories = res.data.categories;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.category_container {
  border: 1px solid rgb(255, 240, 31);
  padding: 50px;
  align-items: center;
}
</style>
