<template>
  <div id="main">
    <h2>Admin Sign Up</h2>
    Already a user? <a href="#" @click="login">Log In</a>
     <button @click="login" class="b1">Log In</button><br>
     Not an Admin? <a href="#" @click="onClick">User SignUp</a><br>
    
    <h3>Name:</h3>
    <input type="text" v-model="name" placeholder="Enter Name" />
    <h3>E-mail:</h3>
    <input type="text" v-model="mail" placeholder="Enter E-mail" />
    <h3>Password:</h3>
    <input type="password" v-model="pass" placeholder="Enter Password" />
    <br/><br>
    <input type="password" v-model="code" placeholder="Enter Admin Code"/>
    <br /><br />
    <button class="b1" type="submit" v-on:click="signUp">Sign Up</button>
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
      userType:"admin"
    };
  },
  methods: {
    onClick(){
        this.$router.push({name:'signUp'})
    },
     login(){
        this.$router.push({name:'login'})
    },
    signUp() {
        if(this.code==='1234'){
           if(this.name && this.mail && this.pass && this.userType){
            axios.post("http://localhost:3300/users", {
        email: this.mail,
        name: this.name,
        password: this.pass,
        userType:this.userType
      }).then(response => console.log(response))
      prompt("Signed Up Successfully")
           }else{
            alert(`Please fill the required details`)
           }
    //   console.warn("Signin", this.name, this.mail, this.pass);
      // console.warn(result);
      // if (result.status == 201) {
      //   alert("task completed");
      // }
        }
        else{
            alert("Error: Wrong Admin Code!")
        }
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
  color: rgb(129, 21, 21);
}
h2 {
  margin-bottom: 10px;
  color: rgb(129, 21, 21);
}
#main {
  border: solid 1px rgb(247, 59, 59);
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  max-width: 300px;
  max-height: 500px;
  background: rgb(248, 185, 185);
}
.b1 {
  width: 150px;
  background: rgb(246, 247, 252);
  color: rgba(255, 1, 1, 0.991);
  border: none;
}
</style>
