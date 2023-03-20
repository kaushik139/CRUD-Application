<template>
  <div id="main">
    <h2>Log In</h2>
    <h3>E-mail:</h3>
    <input type="text" v-model="mail" placeholder="Enter E-mail" />
    <h3>Password:</h3>
    <input type="password" v-model="pass" placeholder="Enter Password" />
    <br /><br />
    <button @click="login">LogIn</button>
    <button @click="signup" class="b1">Sign Up</button>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

import axios from "axios";
export default {
  name: "LogIn",
  data(){
    return{
      mail: "",
      pass: "",
      role:"",
    };
  },
  methods: {
    signup() {
      this.$router.push({ name: "signUp" });
    },
    login() {
      axios.post("http://localhost:3300/verification", {
          email: this.mail,
          password: this.pass,
        })
        .then((response) => {
          if (response.data === "Valid user") {
            alert("Login Successful");
            localStorage.setItem("user-mail",this.mail);
            this.$router.push({ name: "homePage" });
          } else {
            alert(response.data);
          }
        })
        .catch(error => console.log(error));
        var reslt= "";
        axios
      .get(`http://localhost:3300/users/${this.mail}`)
      .then((response) => {
        console.log(response.data)
        reslt = response.data;
        console.log(reslt.role)
        localStorage.setItem('user-role',reslt.role)
      });
    // const role = reslt.role;
    // localStorage.setItem("user-role", role);
    },
    
  },
  mounted(){
     let user = localStorage.getItem('user-info');
     if(user){
        this.$router.push({name:"homepage"})
     }

  }
};
</script>





<style scoped>
h2 {
  margin-bottom: 10px;
  color: rgb(23, 129, 21);
}
h3 {
  margin-bottom: 0px;
}
#main {
  border: solid 1px rgb(59, 247, 68);
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  max-width: 300px;
  max-height: 400px;
  background: rgb(188, 248, 185);
}
#b1 {
  width: 150px;
  background: rgb(246, 252, 246);
  color: rgba(1, 255, 52, 0.991);
  border: none;
}
</style>