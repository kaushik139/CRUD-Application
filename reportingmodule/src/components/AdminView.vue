<template>
  <TopHeadder />
  <div id="main">
    <h2>Admin View</h2>
    <h3>{{ message }}</h3>
    <div class="sub" v-for="(item, index) in result" :key="item.task_id">
      <p>User: {{ item.name }}</p>
      <p>Task No: {{ index + 1 }}</p>
      <p>Task Status: {{ item.status }}</p>
      <p>Date: {{ item.date1 }} - {{ item.date2 }}</p>
      <p>Time: {{ item.time1 }} - {{ item.time2 }}</p>
      <p>{{ item.task }}</p>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import TopHeadder from "./TopHeadder.vue";
import axios from "axios";
export default {
  name: "AdminView",
  components: {
    TopHeadder,
  },
  data() {
    return {
      name: "",
      message: "",
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
  methods: {},
  async mounted() {
    await axios
      .get(`http://localhost:3300/tasks/`)
      .then((response) => {
        this.result = [...response.data];
      })
      .catch((error) => console.log(error));
    this.result.forEach((element) => {
      element.date1 = element.date1.toString().substring(0, 10);
      element.date2 = element.date2.toString().substring(0, 10);
    });
    let user = localStorage.getItem("user-mail");
    if (!user) {
      this.$router.push({ name: "login" });
    }
    let roal = localStorage.getItem("user-role");
    if (roal === "user") {
      this.$router.push({ name: "pagenotfound" });
    }
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
.sub {
  border: solid 1px rgb(59, 231, 247);
  color: rgb(0, 94, 255);
  border-radius: 10px;
  padding: 15px;
  margin: 0px;
  max-width: 100%;
  max-height: 400px;
  background: rgb(185, 234, 248);
}
.b1 {
  width: 50px;
  background: rgb(252, 252, 246);
  color: rgba(255, 1, 1, 0.991);
  border: none;
}
</style>