<template>
    <div>
        <img class ="logo" src="../assets/restaurant-logo.png"/>
    
    <div class = "register">
        <input type="text"  v-model="register.name" placeholder="Enter Name"/> 
        <input type="text" v-model="register.email" placeholder="Enter Email"/> 
        <input type="password"  v-model="register.password"  placeholder="Enter Passsword"/> 
        <button @click="signUp">Sign Up</button>
    </div>
    <p> 
        <router-link to = "/login"> LogIn </router-link>
    </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"SignUp",
    data() 
    {
        return {
            canLogin: false,
            register : {
                name:"",
                email:"",
                password:""
            }
        }
    },
    methods:{
      async signUp()
        {
           axios.post("http://127.0.0.1:3333/api/auth/register", this.register)
           .then((response) => {
            console.log(response)
            this.$router.push('/homepage"')
           })
           .catch((error) => {
            console.error(error)
           })
        }
    }
}
</script>
