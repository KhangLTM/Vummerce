<template>
<div class=" h-screen bgg flex flex-col space-y-10 justify-center items-center">
    <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium">Login</h1>
        <p class="text-sm">Sign in and buy amazing product</p>

        <form  @submit.prevent="onSubmit()" class=" space-y-5 mt-5">
            <input type="email" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" v-model="email" required />
            <div class="w-full flex items-center border border-gray-800 rounded px-3">
                <input id="password" type="password" class="w-4/5 h-12" placeholder="Password" v-model="password" required />
                <span @click="showPassword" class="text-gray-700 hover:bg-gray-400 rounded-md px-3">Show</span>
            </div>

            <div>
                <router-link to="/register" class="font-medium text-blue-800 hover:bg-gray-300 rounded-md p-2">Dont have account ? Register Now !</router-link>
            </div>
            
                <button  v-if="!isLoggin" type="submit" class="bg-gray-100 text-center w-full py-2  hover:bg-gray-800 hover:text-white focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-gray-900 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                   Login
                </button>
            <button v-else disabled class=" text-center w-full bg-gray-400 rounded-md text-white py-3 font-medium ">  <i class="fas fa-circle-notch fa-spin"></i>
Login</button>
        </form>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from "vuex"

export default {
    data() {
        return {
            email: '',
            password: '',
            isLoggin: false,
        }
    },
    methods: {
        ...mapActions(['loginWithEmail']),

        onSubmit() {
            let data = {
                email: this.email,
                password: this.password
            }
            this.isLoggin = true
            this.loginWithEmail(data)
                .then(() =>

                    this.$router.push({
                        name: 'mainpage'

                    }).catch(() => {})
                )
                .catch(e => {
                    this.$swal({
                        icon: 'error',
                        title: 'Something Wrong Happen ',
                        text: e,
                        showConfirmButton: true,
                        confirmButtonColor: 'rgba(31, 41, 55,0.8)'
                    })
                    this.isLoggin = false

                })
        },
        showPassword() {
            const passwordField = document.querySelector('#password')
            if (passwordField.getAttribute('type') === 'password') passwordField.setAttribute('type', 'text')
            else passwordField.setAttribute('type', 'password')

        }
    },

}
</script>

<style>

</style>
