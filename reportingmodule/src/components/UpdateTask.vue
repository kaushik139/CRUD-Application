<template>
  <TopHeadder />
  <div id="main">
    <h2>Update Task</h2>
    Enter Commencing Date:
    <input
      v-model="cdate"
      type="date"
      placeholder="Enter Commencing Date"
    /><br />
    Enter Commencing Time:
    <input v-model="ctime" type="time" placeholder="Enter Commencing Time" />
    <br />
    Enter Ending Date:
    <input v-model="edate" type="date" placeholder="Enter Ending Date" />
    <br />
    Enter Ending Time:
    <input v-model="etime" type="time" placeholder="Enter Ending Time" /><br />
    Task Status:
    <input
      @click="onClick($event)"
      :checked="active"
      type="radio"
      name="status"
      value="active"
    /><label>Active</label>
    <input
      @click="onClick($event)"
      :checked="inactive"
      type="radio"
      name="status"
      value="inactive"
    /><label>Inactive</label>
    <br />
    <textarea
      v-model="taskDetails"
      name="task"
      cols="30"
      rows="5"
      placeholder="Enter Task"
    ></textarea
    ><br />
    <button id="b1" @click="updateTask">Update Task</button>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import TopHeadder from "../components/TopHeadder.vue";
import axios from "axios";
export default {
  name: "UpdateTask",
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
      taskDetails: "",
      message: "",
      active: false,
      inactive: false,
    };
  },
  methods: {
    updateTask() {
      const info = {
        date1:this.cdate,
        date2:this.edate,
        time1:this.ctime,
        time2:this.etime,
        task:this.taskDetails,
        status:this.status,
        message:""
      }
      axios
      .put(`http://localhost:3300/updateTasks/${localStorage.getItem('tid')}`,info)
      .then((response) => {
        console.log(response.data)
        this.message = response.data;
      })
      .catch((error) => console.log(error));
    },
    onClick(event) {
      console.log(event.target.value, this.active);
    },
  },
  mounted() {
    this.cdate = localStorage.getItem("cdate");
    this.edate = localStorage.getItem("edate");
    this.ctime = localStorage.getItem("ctime");
    this.etime = localStorage.getItem("etime");
    if(localStorage.getItem('status') == 'active'){
      this.active = true;
      this.inactive = false;
    }
    else{
      this.active = false;
      this.inactive = true;
    }
    this.taskDetails = localStorage.getItem("task");
    this.status = localStorage.getItem("status")
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
  color: rgba(1, 136, 255, 0.991);
  border: none;
}
</style>