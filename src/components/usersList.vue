<template>
  <div class="container mt-5 pb-5 mb-5">
    <div class="row">
      <div
        class="col-md-4 card m-3 mx-auto"
        style="max-width: 20rem"
        v-for="(user, index) in users"
        :key="index"
      >
        <div class="card-header">
          {{ user.name }}
        </div>
        <div class="card-body">
          <h5>{{ user.email }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UserList",
  props: {
    users: Array,
  },
  mounted() {
    console.log(this.users, "see");
  },
};
</script>
<style>
.card{
    padding: 0px !important;
}
</style>