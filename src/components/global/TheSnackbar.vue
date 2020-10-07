<template>
    <transition name="fade">
        <div v-if="show" class="fixed flex justify-center w-full z-50 my-8 md:m-8 bottom-0 left-0 right-0">
            <div class="inline-block py-4 px-6 bg-purple-900 rounded">
                <h2 class="text-base text-white">{{message}}</h2>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name: 'StickyMsg',
    props: {
        message: {
            type: String
        }
    },
    data: function() {
        return {
            show: false,
            delay: 3000
        }
    },
    watch: {
        message: function(){
            this.timedDisplay();
        }
    },
    methods: {
        // Displays for a period of time
        timedDisplay() {
            this.show = true;
            setTimeout(function() {
                this.show = false
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