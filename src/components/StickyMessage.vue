<template>
    <transition name="fade">
        <div v-if="active && show" class="fixed w-full md:w-5/12 xl:w-3/12 z-50 bg-white md:m-8 bottom-0 right-0 border-t md:border-t-4 md:border-orange-500 shadow-lg">
            <!-- Close -->
            <div @click="show = !show" class="absolute top-0 right-0 px-3 py-2 sm:px-6 sm:py-4 cursor-pointer">
                <svg class="fill-current text-gray-800 inline-block h-4 w-4 sm:h-3 sm:w-3" viewBox="0 0 386.667 386.667" xmlns="http://www.w3.org/2000/svg"><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>
            </div>

            <!-- Body -->
            <div class="p-2 sm:p-4 md:p-6 w-full text-center">
                <h2 class="hidden sm:block text-lg md:text-xl font-semibold text-gray-800">{{title}}</h2>
                <p class="hidden sm:block mt-1 text-sm md:text-base text-gray-500">{{description}}</p>
                <Button class="my-2 sm:mt-4" size="large" url="https://www.onlinemortgageadvisor.co.uk/enquiry/self-employed-sf/">{{cta}}</Button>
            </div>
        </div>
    </transition>
</template>

<script>
import Button from './atoms/Button';

export default {
    name: 'StickyMsg',
    components: {
        Button
    },
    props: {
        title: {
            type: String,
            default: "Looking for more advice?"
        },
        description: {
            type: String,
            default: "We’ll match you with your perfect mortgage broker, whatever your background – for free!"
        },
        cta: {
            type: String,
            default: "Find my perfect broker"
        }
    },
    data: function() {
        return {
            show: true,
            active: false,
            delay: 20000
        }
    },
    mounted() {
        // this.scroll()
        this.timedDisplay();
    },
    methods: {
        // Displays when the user hits the bottom of the page
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

                if (bottomOfWindow) {
                    this.active = true
                }
            }
        },
        // Displays after a period of time
        timedDisplay() {
            
            setTimeout(function() {
                this.active = true
            }.bind(this), this.delay);
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