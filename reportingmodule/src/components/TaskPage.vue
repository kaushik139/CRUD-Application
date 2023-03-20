<template>
  <TopHeadder />
  <div id="main">
    <h2>View Task</h2>
    <h3>{{message}}</h3>
    <div class="sub" v-for="(item,index) in result" :key="item.task_id" >
      <p>Task No: {{ index+1 }}</p>
      <p>Task Id: {{ item.task_id }}</p>
      <p>Task Status: {{ item.status }}</p>
      <p>Date: {{ item.date1 }} - {{ item.date2 }}</p>
      <p>Time: {{ item.time1 }} - {{ item.time2 }}</p>
<p>{{ item.task }}</p>
<button class="b1" @click="update(item)">Update</button>
      <button class="b1" @click="onClick(item.task_id,index)">Delete</button>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import TopHeadder from "../components/TopHeadder.vue";
import axios from "axios";
export default {
  name: "TaskPage",
  components: {
    TopHeadder,
  },
  data() {
    return {
      message:"",
      taskid: "",
      userid: "",
      task: "",
      status: "",
      date1: "",
      date2: "",
      time1: "",
      time2: "",
      result: [],
    };
  },
  methods:{
  update(item){
    localStorage.setItem('tid',item.task_id);
    localStorage.setItem('cdate',item.date1);
    localStorage.setItem('edate',item.date2);
    localStorage.setItem('ctime',item.time1);
    localStorage.setItem('etime',item.time2);
    localStorage.setItem('status',item.status);
    localStorage.setItem('task',item.task);
    this.$router.push({name:"updatetask"})
    // this.result.splice(ind,1)
    // axios.update(`http://localhost:3300/updatetask/${element}`)
    // .then((response) => {
    //     this.message = response.data;
    //   }); 
     // axios.delete(`http://localhost:3300/deletetask/${element}`)
    },
    onClick(element,ind){
    this.result.splice(ind,1)
    axios
      .delete(`http://localhost:3300/deletetask/${element}`)
      .then((response) => {
        this.message = response.data;
      });  
    },
  },
  async mounted() {
    const usermail = localStorage.getItem("user-mail");
    // console.log(usermail);
    // let reslt= await axios.get(`https://localhost:3300/users/${usermail}`)
    let reslt = "";
    await axios
      .get(`http://localhost:3300/users/${usermail}`)
      .then((response) => {
        reslt = response.data;
      });
    const id = reslt.id;
    localStorage.setItem("user-id", id);
    // const user
    // this.result = await axios.get("http://localhost:3300/tasks/"+localStorage.getItem('user-id'))
    //  const user_id = localStorage.getItem("user-id")
    await axios
      .get(`http://localhost:3300/tasks/${id}`)
      .then((response) => {
        this.result = [...response.data];
      })
      .catch((error) => console.log(error));
      this.result.forEach(element=>{
        element.date1 = element.date1.toString().substring(0,10);
        element.date2 = element.date2.toString().substring(0,10);
      })
  },
};
</script>





<style scoped>
h2 {
  margin-bottom: 10px;
  color: rgb(122, 129, 21);
}
h3 {
  margin-bottom: 0px;
}
#main {
  border: solid 1px rgb(244, 247, 59);
  border-radius: 10px;
  padding: 15px;
  margin: 0px;
  max-width: 100%;
  max-height: 100%;
  background: rgb(243, 248, 185);
}
.sub{
  border: solid 1px rgb(247, 166, 59);
  color:rgb(255, 106, 0) ;
  border-radius: 10px;
  padding: 15px;
  margin: 0px;
  max-width: 100%;
  max-height: 400px;
  background: rgb(248, 222, 185);
}
.b1 {
  width: 50px;
  background: rgb(252, 252, 246);
  color: rgba(255, 1, 1, 0.991);
  border: none;
}
</style>