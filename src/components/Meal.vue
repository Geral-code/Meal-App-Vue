<template>
  <div
    class="category_container">
    <img @click="openMealDetails" v-bind:src="meal.strMealThumb" alt="" />
    <p><b>{{ meal.strMeal }}</b></p>
    <h6>Categoria: {{ meal.strCategory }} | Origen: {{ meal.strArea }} </h6>
    <p></p>
  </div>
</template>
<script>

export default {
    props: ["meal"],
        methods: {
      openMealDetails (){
        this.$router.push("/meal/" + this.meal.idMeal)        
      }
    }, 
};
</script>

<style>

</style>
