<template>
  <div id="main">
    <h2>Sign Up</h2>
Already a user?
     <button @click="login">Log In</button><br>
     Wanna be <a href="#" @click="onClick">Admin</a>?<br>
    <h3>Name:</h3>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <h3>E-mail:</h3>
    <input type="text" v-model="mail" placeholder="Enter E-mail" />
    <h3>Password:</h3>
    <input type="password" v-model="pass" placeholder="Enter Password" />
    <br/>
    <br />
    <button id="b1" type="submit" v-on:click="signUp">Sign Up</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      mail: "",
      pass: "",
      userType:"user"
    };
  },
  
  methods: {
    onClick(){
        this.$router.push({name:'adminSignUp'})
    },
    login(){
        this.$router.push({name:'login'})
    },
    signUp() {
      if(this.name && this.mail && this.pass && this.userType){
       axios.post("http://localhost:3300/users", {
        email: this.mail,
        name: this.name,
        password: this.pass,
        userType:this.userType
      }).then(response => console.log(response))
      alert("Sign Up Successful");
      this.$router.push({name:'login'})
      }
      else{
        alert('Please fill the required details')
      }
      
      // console.warn(result);
      // if (result.status == 201) {
      //   alert("task completed");
      // }
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
h3 {
  margin-bottom: 0px;
}
#main {
  border: solid 1px rgb(59, 59, 247);
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  max-width: 300px;
  max-height: 400px;
  background: rgb(185, 203, 248);
}
#b1 {
  width: 150px;
  background: rgb(246, 247, 252);
  color: rgba(18, 1, 255, 0.991);
  border: none;
}
</style>
