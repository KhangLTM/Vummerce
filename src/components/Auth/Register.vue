<template>
<div class=" h-screen  bgg flex flex-col space-y-10 justify-center items-center">
    <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium">Register</h1>
        <p class="text-sm"> All best quality Apple Products are here. </p>

        <form @submit.prevent="onSubmit()" class="space-y-5 mt-5">
            <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Your name" v-model="name" required minlength="5" />
            <input type="email" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" v-model="email" required />
            <input id="password" type="password" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Password" v-model="password" required />
            <span v-show="!isValid" class="text-red-600 text-small  ">Your password must have at least 6 digits </span>
             <button v-if="!isreg" type="submit" class="bg-gray-100 text-center w-full py-2  hover:bg-gray-800 hover:text-white focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-gray-900 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                   Register
                </button>
            <button v-else disabled class="text-center w-full bg-gray-400 rounded-md text-white py-3 font-medium">  <i class="fas fa-circle-notch fa-spin"></i>
Register</button>

            <div>
                <router-link to="/login" class="font-medium text-blue-800 hover:bg-gray-200 rounded-md p-2">Already have one ? Login now</router-link>
            </div>
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
            name: '',
            isreg: false,
            isValid: true,
        }
    },
    methods: {
        ...mapActions(['registerByEmail']),
        onSubmit() {    
            this.isreg=true
            this.checkPass()
            let data = {
                email: this.email,
                password: this.password,
                username: this.name
            }

            if (this.isValid) {
                this.registerByEmail(data)
                    .then(() => {
                        this.isreg = true,
                        this.$router.push('/'),
                        this.$router.go()
                        
                    })
            }
        },
        checkPass() {
            this.password.length >= 6 ?
                this.isValid = true :
                this.isValid = false
        }
    }

}
</script>

<style>

</style>
