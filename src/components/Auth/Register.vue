<template>
<div class=" h-screen bg-gray-200 bgg flex flex-col space-y-10 justify-center items-center">
    <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium">Register</h1>
        <p class="text-sm"> All best quality Apple Products are here. </p>

        <form @submit.prevent="onSubmit" class="space-y-5 mt-5">
            <input type="text" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Your name" v-model="name" required />
            <input type="email" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Email" v-model="email" required />
            <input id="password" type="password" class="w-full h-12 border border-gray-800 rounded px-3" placeholder="Password" v-model="password" required />
            <span v-show="!isValid" class="text-red-600 text-small  ">Your password must have at least 6 digits </span>
            <button v-if="isreg" type="submit" class="text-center w-full bg-gray-400 rounded-md text-white py-3 font-medium" disabled>
                <i class="fas fa-circle-notch fa-spin"></i>
                Register
            </button>
            <button v-else type="submit" class="text-center w-full bg-gray-800 rounded-md text-white py-3 font-medium">Register</button>

            <div>
                <router-link to="/login" class="font-medium text-blue-800 hover:bg-blue-300 rounded-md p-2">Already have one ? Login now</router-link>
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
            this.checkPass()
            let data = {
                email: this.email,
                password: this.password,
                username: this.name
            }

            if (this.isValid) {
                this.registerByEmail(data)
                    .then(() => {
                        this.isreg = true
                        this.$router.back()
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
