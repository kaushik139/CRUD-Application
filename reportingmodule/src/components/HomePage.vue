<template>
<TopHeadder/>
<br><br><br>
  <div id="main">
    <h1>Welcome to Home Page {{user}}</h1>
    <br><br>
    
  </div>
</template>



<script>
import TopHeadder from "../components/TopHeadder.vue";
export default {
  name: "HomePage",
  components: {
    TopHeadder,
  },
  data(){
    return{
user:`${localStorage.getItem('user-mail')}`
    }
  },
  methods: {
    signup() {
      this.$router.push({ name: "signUp" });
    },
    login() {
      this.$router.push({ name: "login" });
    },
  },
   mounted(){
     let user = localStorage.getItem('user-mail');
     if(!user){
        this.$router.push({name:"login"})
     }
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 0px;
  color: rgb(106, 21, 129);
}
#main {
  border: solid 1px rgb(209, 59, 247);
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  margin-top: 20px;
  max-width: 300px;
  max-height: 400px;
  background: rgb(228, 185, 248);
}
.b1 {
  width: 150px;
  background: rgb(250, 246, 252);
  color: rgba(225, 1, 255, 0.991);
  border: none;
}
</style>