<template>
    <div>
        <img class ="logo" src="../assets/restaurant-logo.png"/>

    <div class = "login">
        <input type="text" v-model="login.email" placeholder="Enter Email"/> 
        <input type="password"  v-model="login.password"  placeholder="Enter Passsword"/> 
        <button>login</button>
    </div>
    <p> 
        <router-link to = "/signup"> Sign Up </router-link>
    </p>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:"LogIn",
    data() 
    {
        return {
            canLogin: false,
            login : {
                email:"",
                password:""
            }
        }
    },
    // methods:{
    //   async signUp()
    //     {
    //        axios.post("http://127.0.0.1:3333/api/auth/register", this.register)
    //        .then((response) => {
    //         console.log(response)
    //         this.$router.push('/homepage"')
    //        })
    //        .catch((error) => {
    //         console.error(error)
    //        })
    //     }
    // }
}
</script>

<style>
.login{
    width: 130px;
}
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-top: 10px;
    display: block;
    margin-bottom: 30px;
    margin-left: 480px;  
    border: 1px solid burlywood
}
.login button{
    width: 320px;
    height: 40px;
    margin-left: 480px;  
    border: 1px solid burlywood;
    background: burlywood;
    color: white;
    cursor: pointer;

}
</style>