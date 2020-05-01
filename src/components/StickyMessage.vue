<template>
    <transition name="fade">
        <div v-if="active && show" class="fixed w-3/12 z-50 bg-white rounded-lg m-8 bottom-0 right-0 shadow-lg">
            <div @click="show = !show" class="absolute top-0 right-0 px-6 py-4 cursor-pointer">
                <svg class="fill-current text-gray-800 inline-block h-3 w-3" viewBox="0 0 386.667 386.667" xmlns="http://www.w3.org/2000/svg"><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>
            </div>
            <div class="py-4 px-6">
                <h2 class="text-xl w-11/12 font-semibold text-gray-800">The Latest <span class="text-indigo-600">Categories</span></h2>
                <p class="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum </p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'StickyMsg',
    props: {},
    data: function() {
        return {
            show: true,
            active: false
        }
    },
    mounted() {
        this.scroll()
    },
    methods: {
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

                if (bottomOfWindow) {
                    this.active = true
                }
            }
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s ease-in-out;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
}
</style>