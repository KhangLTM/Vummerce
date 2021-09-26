<template>
<header class="bg-white">

    <div class="container flex flex-col-reverse   px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex  justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button v-for="(btn,index) in slides" :key="index" @click="selectSlide(index)" :class="{'bg-yellow-400':index===current,'bg-gray-300':index!==current}" class="w-3 h-3 mx-2 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2  md:block hidden">
                <h1 class="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">The Best Apple Product</h1>
                <p class="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div class="mt-6">
                    <a class="cursor-pointer block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Shopping now</a>
                </div>
            </div>
        </div>

        <div class=" flex items-center justify-center w-full md:h-96 md:w-1/2">
            <ul>
                <li v-for="(img,index) in slides" :class="{block:index===current,hidden:index!==current}" :key="index">
                    <img class="object-cover w-full h-full max-w-2xl rounded-md" :src="img">
                </li>
            </ul>
        </div>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                'https://i.ytimg.com/vi/-Q7E1bkJ5Ds/maxresdefault.jpg',
                'https://www.macworld.com/wp-content/uploads/2021/03/apple-mac-lineup-2019-100796683-orig-2.jpg?quality=50&strip=all&w=1024',
                'https://www.igeeksblog.com/wp-content/uploads/2021/03/Upcoming-Apple-Products-in-2021.jpg',
                'https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/08/16/apple-products.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280'
            ],
            current: 0,
            timer: null,
        }
    },
    methods: {
        nextSlide: function () {
            this.current++;
            if (this.current >= this.slides.length)
                this.current = 0;
            if (this.current < 0)
                this.current = this.slides.length
        },

        selectSlide: function (i) {
            this.current = i;
            this.resetPlay()
            this.play()
        },
        play() {
            this.timer = setInterval(this.nextSlide, 3000)

        },
        resetPlay() {
            clearInterval(this.timer)
        }
    },
    created() {
        this.play()
    }

}
</script>

<style>

</style>
