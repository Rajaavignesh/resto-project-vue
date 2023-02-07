<template>
  
  <div id="app">  
          <router-view></router-view>
    </div>
</template>

<script>
// import SignUp from'./components/SignUp.vue'

export default {
  name: 'App',
  components: {
    // SignUp/
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo{
    width: 130px;
}
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-top: 10px;
    margin-bottom: 30px;
    margin-left: auto;  
    margin-right: auto;
    border: 1px solid burlywood
}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid burlywood;
    background: burlywood;
    color: white;
    cursor: pointer;

}
</style>
