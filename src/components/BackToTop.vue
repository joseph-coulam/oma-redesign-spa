<template>
    <transition name="fade">
        <div v-if="active && show" class="fixed w-full md:w-1/12 z-20 bg-white md:m-8 bottom-0 left-0">
            <!-- Close -->
            <div @click="this.scrollToTop" class="absolute bottom-0 left-0 px-3 py-2 sm:px-2 sm:py-2 cursor-pointer">
                <svg class="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 390"><g id="Group_898" data-name="Group 898" transform="translate(4520 -1918)"><circle id="Ellipse_39" data-name="Ellipse 39" cx="195" cy="195" r="195" transform="translate(-4520 1918)" fill="rgba(0,0,0,0.4)"/><g id="Group_897" data-name="Group 897" transform="translate(-3764.14 2713.298) rotate(-90)"><path id="Path_117" data-name="Path 117" d="M396.676,119.086,322.229,44.638a11.315,11.315,0,0,0-15.957,0L299.513,51.4a11.2,11.2,0,0,0-3.293,7.978,11.42,11.42,0,0,0,3.293,8.071l43.431,43.527H231.137A11.01,11.01,0,0,0,220,122.067v9.558c0,6.223,4.916,11.584,11.137,11.584h112.3l-43.922,43.77a11.173,11.173,0,0,0,0,15.843l6.759,6.739a11.317,11.317,0,0,0,15.957-.015L396.678,135.1a11.378,11.378,0,0,0,0-16.014Z" transform="translate(260 -688.346)" fill="#fff"/></g><line id="Line_57" data-name="Line 57" x2="149" transform="translate(-4398.5 2037.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="31"/></g></svg>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'BackToTop',
    props: {
        scrollHeight: {
            scrollHeight: Number,
            default: 500
        }
    },
    data: function() {
        return {
            show: true,
            active: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scroll);
    },
    methods: {
        // Displays when the user hits the bottom of the page
        scroll() {
            (document.body.scrollTop > this.scrollHeight || document.documentElement.scrollTop > this.scrollHeight) ? this.active = true: this.active = false;
        },
        scrollToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s ease-in-out;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
}
</style>