<template>
  <div @click="openCategoryList"
    class="category_container"

  >
    <img v-bind:src="category.strCategoryThumb" alt="" />

    <h6>{{ category.strCategory }}</h6>
    <p>{{ category.strCategoryDescription }}</p>
  </div>
</template>

<script>
export default {
    props: ["category"],

    methods: {
      openCategoryList(){
        this.$router.push("/category/" + this.category.strCategory);
        
      }

    }
};
</script>

<style>
</style>
