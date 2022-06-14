<template>
  <h1>Meal App</h1>
  <hr />

  <div id="nav">
    <router-link to="/"> Inicio </router-link>

    
  </div>
  <router-view></router-view>

  <h2>¿Deseas buscar una receta?</h2>

  <input
    type="text"
    v-model="search"
    v-on:keyup.enter="searchData"
    placeholder="Buscar receta"
  />

  <div class="text-center">...</div>

  <h2>O busca por Categoría</h2>

  <Meal v-for="meal in meals" v-bind:key="meal.idMeal" v-bind:meal="meal" />

  <Category
    v-for="category in paginated"
    v-bind:key="category.idCategory"
    v-bind:category="category"
  />

  <div class="text-center">Actual : {{ current }}</div>

  <div class="text-center">
    <a @click="prev()">Anterior</a>
    |
    <a @click="next()">Siguiente</a>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import Meal from "@/components/Meal.vue";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "App",
  components: {
    Category,
    Meal,
  },
  data() {
    return {
      categories: [],
      meals: [],
      search: null,
      
      //Paginación
      current: 1,
      pageSize: 5,
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

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },

    indexEnd() {
      return this.indexStart + this.pageSize;
    },

    paginated() {
      return this.categories.slice(this.indexStart, this.indexEnd);
    },
  },
  methods: {
    searchData() {
      //Verificar si el campo de busqueda tiene texto
      if (this.search) {
        axios
          .get(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
              this.search
          )
          .then((res) => {
            this.meals = res.data.meals;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        swal({
          title: "Atención",
          text: "¡Debes ingresar un texto!",
          icon: "error",
        });

        //  alert("Debes ingresar un texto");
      }
    },
    prev() {
      this.current--;
    },
    next() {
      this.current++;
    },
  },
};
</script>

<style>
* {
  text-align: center;
}
.category_container {
  border: 1px solid rgb(255, 240, 31);
  padding: 50px;
  text-align: center;
}
h2 {
  text-align: center;
}
input {
  margin-bottom: 40px;
}
</style>
