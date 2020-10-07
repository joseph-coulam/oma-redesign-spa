<template>
    <div class="relative">
        <span @click="isOpen = !isOpen" class="inline-block text-white no-underline hover:text-white hover:underline cursor-pointer" href="#">About us <svg class="pl-1 py-1 inline-block w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7"><path id="Union_4" data-name="Union 4" d="M1,1,6.17,6ZM11,1,6.17,6Z" style="fill:#ffffff;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg></span>
        
        <button v-if="isOpen" @click="isOpen = false" class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-0 h-full w-full cursor-default"></button>
        <transition name="fade">
            <div v-if="isOpen" class="border py-2 absolute mt-4 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20">
                <div v-for="menuItem in aboutMenu" :key="menuItem.title">
                    <a class="cursor-pointer inline-block" :href="menuItem.url">{{menuItem.title}}</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    components: {},
    props: {
        aboutMenu: Array
    },
    data() {
        return {
            isOpen: false
        }
    }
}
</script>

<style lang="postcss" scoped>
a {
    @apply block text-gray-800 px-6 py-2 cursor-pointer
}

a:hover {
    @apply bg-purple-100
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>