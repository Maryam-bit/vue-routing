<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"><b>Vue-Routing</b></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto nav-item">
          <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
          <b-nav-item
            ><router-link :to="{ name: 'About' }"
              >About</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link :to="{ name: 'Jobs' }">Jobs</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>


<style>
.nav-item a {
  font-weight: bold;
  color: white;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
}
.nav-item a.router-link-exact-active {
  color: white;
  background-color: lightskyblue;
}
.nav-item a:hover {
  text-decoration: none;
  color: #f4f4f4;
}
</style>