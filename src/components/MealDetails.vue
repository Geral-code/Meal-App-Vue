<template>

<div>
    <h3> {{ meal_title }} </h3>
    
</div>

</template>

<script>
import axios from 'axios';


export default {
    name: "MealDetails",

    data(){
        return {
            meal_title: "Titulo de la receta" //this.$route.params.title,

        }
    },
    mounted() {
     
    
       axios
      .get("http://themealdb.com/api/json/v1/1/lookup.php?i=" + this.$route.params)
      .then((res) => {
    //   this.meals = res.data.meals;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  
    
}
</script>

<style>

</style>