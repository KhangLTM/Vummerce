<template>
<div>
    <h1 class="text-xl md:text-2xl font-bold">Comments ({{length}})</h1>
    <form @submit.prevent="onSubmit()" class="flex ">

        <div v-if="isLoggedIn" class=" w-full bg-white p-2 pt-4 rounded">
            <div class="flex ml-3">
                <div class="mr-3">
                    <img src="http://picsum.photos/50" alt="" class="rounded-full">
                </div>
                <div>
                    <h1 class="mt-3 md:text-lg font-semibold">{{currentUser.name}}</h1>
                </div>
            </div>
            <div class="mt-3 p-3 w-full">
                <textarea v-model="comment" rows="3" class="border p-2 rounded w-full" placeholder="Write something..." required></textarea>
            </div>
            <div class="flex justify-between mx-3">
                <div><button type="submit" class="px-5 py-2 bg-gray-800 text-white rounded font-medium hover:bg-gray-600">Submit</button></div>
                <div><a href="#">...</a></div>
            </div>

        </div>
        <div v-else class=" md:text-lg font-medium mt-4" > You must be <router-link :to="{name:'login'}" class="text-blue-500 hover:text-red-300" > logged in</router-link>  to post a comment </div>
    </form>
    <transition-group name="fade" >
    <div v-show="commentIndex <= numberCom" v-for="commentIndex of numberCom" :key="commentIndex" class="flex py-5 ">
        <div class="w-full shadow-md p-2 pt-4 rounded">
            <div class="flex ml-3">
                <div class="mr-3">
                    <img src="https://picsum.photos/50" alt="" class="rounded-full">
                </div>
                <div class="w-full">
                    <span class="flex w-full justify-between">
                        <p class="text-lg font-semibold">
                            {{comments[commentIndex-1].username}}
                            <Star />
                        </p>
                        <p class="text-xs md:text-base font-sm text-gray-500">{{comments[commentIndex-1].time}}</p>
                    </span>

                    <p class="font-medium  py-5 lg:text-xl">{{comments[commentIndex-1].comment}}</p>
                </div>
s
            </div>

        </div>

    </div>
    </transition-group>
    <div class="pt-5">
        <button v-if="numberCom < length"  @click="loadMoreCom(1)" type="button" class="py-2 px-4   hover:bg-gray-800 hover:text-white focus:ring-gray-500 focus:ring-offset-gray-200   transition ease-in duration-200 text-gray-900 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                   Load more Comment
        </button>
        <button v-else   @click="hideCom(3)" type="button" class="py-2 px-4   hover:bg-gray-800 hover:text-white focus:ring-gray-500 focus:ring-offset-gray-200 text-white  transition ease-in duration-200 text-gray-900 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Hide Comment
        </button>
        
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex'

import Star from "./Products/Start.vue"

export default {
    data() {
        return {
            comment: "",
        }
    },
    components: {
        Star,
    },
    computed: {
        ...mapGetters(["currentUser", "comments", "isLoggedIn","numberCom"]),
        length: function () {
            return Object.keys(this.comments).length
        }
    },
    methods: {
        ...mapActions(["pushComment", "getComment"]),
        ...mapMutations(["loadMoreCom",'hideCom']),
        onSubmit() {
            if (this.isLoggedIn) {
                let comment = {
                    name: this.currentUser.name,
                    comment: this.comment,
                    time: this.formatTime()
                }
                this.pushComment(comment)
                this.comment = ""
            } else {
                this.$swal({
                    title: 'You must be logged in to comment',
                    showCancelButton: true,
                    showLoaderOnConfirm: true,
                    confirmButtonText: `Login`,
                }).then((result) => {
                    if (result.value) {
                        this.$router.push({
                            name: 'login'
                        })
                    }
                })

            }
        },

        formatTime() {
            const options = {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            let now = new Date().toLocaleString('en-US', options);
            return now;
        }
    },

    created() {
        this.getComment()
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}


</style>
