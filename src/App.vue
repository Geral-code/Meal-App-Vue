<template>
  <h1>Meal App</h1>
  <hr />

  <div id="nav">
    <router-link to="/"> Inicio </router-link>
   
  </div>
  <router-view></router-view>
  
</template>

<script>
export default {
  name: "App",
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
