<template>
  <div>
    <b-container class="bv-example-row mt-5 pt-5">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col lg="8" md="12">
          <b-card class="mb-2 text-center card" header="Log In ">
            <form @submit.prevent="onsubmit">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value="name"
                v-model="name"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value="email"
                v-model="email"
                required
              />
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value="password"
                v-model="password"
                required
              />
              <button type="submit" class="btn">Login</button>
            </form>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

    <UserList :users="user"/>
<br><br><br>
  </div>
</template>
<script>
    import UserList from '../components/usersList.vue';
export default {
  name: "Signin",
  components:{
      UserList
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      user:[]
    };
  },
  methods: {
    onsubmit() {
        this.user.push({name: this.name, email:this.email})
        
        console.log(this.user, 'userr')
    //   let user = {
    //     name: this.name,
    //     email: this.email
    //   };
    //   this.$emit("user-details", user);
      this.name = "",
        this.email="",
        this.password=""
    },
  },
};
</script>
<style scoped src="../assets/signinStyles.css">
</style>