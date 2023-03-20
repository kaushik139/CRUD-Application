<template>
  <TopHeadder />
  <div id="main">
    <h2>Add Task</h2>
    Enter Commencing Date:
    <input v-model="cdate" type="date" placeholder="Enter Commencing Date" /><br>
    Enter Commencing Time:
    <input v-model="ctime" type="time" placeholder="Enter Commencing Time" />
    <br>
    Enter Ending Date:
    <input v-model="edate" type="date" placeholder="Enter Ending Date" />
    <br>
    Enter Ending Time:
    <input v-model="etime" type="time" placeholder="Enter Ending Time" /><br />
    Task Status:
    <input
      @click="onClick($event)"
      type="radio"
      name="status"
      value="active"
    /><label>Active</label>
    <input
      @click="onClick($event)"
      type="radio"
      name="status"
      value="inactive"
    /><label>Inactive</label>
    <br />
    <textarea v-model="taskDetails" name="task" cols="30" rows="5" placeholder="Enter Task"></textarea
    ><br />
    <button id="b1" @click="addTask">Add Task</button>
    <h3>{{message}}</h3>
  </div>
</template>




<script>
// import { defineComponent } from '@vue/composition-api'
import TopHeadder from "../components/TopHeadder.vue";
import axios from "axios";
export default {
  name: "AddTask",
  components: {
    TopHeadder,
  },
  data() {
    return {
      status: "",
      cdate: "",
      ctime: "",
      edate: "",
      etime: "",
      taskDetails:"",
      message: "",
    };
  },
  methods: {
    onClick(event) {
      this.status = event.target.value;
    },
    async addTask() {
      axios
        .post(`http://localhost:3300/addTask/${localStorage.getItem("user-id")}`,{
          task:this.taskDetails,
          status:this.status,
          date1:this.cdate,
          date2:this.edate,
          time1:this.ctime,
          time2:this.etime
        })
        .then((response) => {
          this.message = response.data;
        });
    },
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
  margin: auto;
  max-width: 500px;
  max-height: 800px;
  background: rgb(243, 248, 185);
}
#b1 {
  width: 150px;
  background: rgb(252, 252, 246);
  color: rgba(255, 1, 1, 0.991);
  border: none;
}
</style>