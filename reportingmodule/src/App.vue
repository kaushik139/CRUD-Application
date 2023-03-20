<template>
<router-view/>
</template>

<script>
// import TopHeadder from "./components/TopHeadder.vue";

export default {
  name: "App",
  // components: {
  //   TopHeadder,
  // },
  methods:{
signup(){
this.$router.push({name:'signUp'})
},
login(){
this.$router.push({name:'login'})
}

  }
};
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding: 0px;
}
</style>
