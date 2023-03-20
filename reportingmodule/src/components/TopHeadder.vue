<template>
  <div class="nav">
    <ul>
        <li>
             <router-link to="home">HOME</router-link>
        </li>
        <li>
             <router-link to="addtask">Add Task</router-link>
        </li>
        <li>
             <router-link to="taskpage">View Task</router-link>
        </li>
         <li v-if = "role === 'admin'">
            <a href="#" @click="adView">Admin View</a>
        </li>
        <li>
            <a href="#" @click="logout">LOGOUT</a>
        </li>
       
    </ul>
   

  </div>
</template>


<script>
export default {
    data(){
        return{
            role:""
        }
    },
    methods:{
logout(){
     console.warn("logout");
     localStorage.clear();
      this.$router.push({name:'login'})
},
adView(){
    this.$router.push({name:'adminview'})
}
    },
    mounted(){
        this.role = localStorage.getItem('user-role');
    }
};
</script>


<style scoped>
.nav{
    /* display: inline; */
background-color: rgb(89, 3, 89);
height: 30px;
width:100%;
margin-bottom: 0px;
padding: 20px;
overflow: hidden;

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0 20px;
  /* overflow: hidden; */
  
}

li {
  float: left;
}

li a {
  display: flex;
  color: white;
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  margin: 0px;
}
li a:hover{
    background-color: rgb(224, 94, 250) ;
    margin: 0px;
}
</style>