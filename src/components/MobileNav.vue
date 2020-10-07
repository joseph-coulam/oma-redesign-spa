<template>
    <div :class="{'menubg-show': mobileActive, 'menubg-hidden': !mobileActive}" class="fixed top-0 left-0 w-full h-full lg:hidden z-50 transition-colors duration-500 ease-in-out">
        <div :class="{'menu-show': mobileActive, 'menu-hidden':!mobileActive}" class="absolute top-0 overflow-scroll w-5/6 h-full bg-white p-4 transition-all duration-500 ease-in-out">
    
            <div @click="toggleMenu" class="absolute top-0 right-0 px-6 py-4 cursor-pointer z-50">
                <svg class="fill-current text-gray-800 inline-block h-3 w-3" viewBox="0 0 386.667 386.667" xmlns="http://www.w3.org/2000/svg"><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>
            </div>
    
            <div class="p-4">
                <p class="font-bold tracking-wider uppercase text-xs pb-4 text-purple-700 border-b border-gray-300">Mortgages</p>
                <div v-for="submenuItem in subnavMenu" :key="submenuItem.title" class="flex flex-column items-center">
                    <a class="inline-block text-gray-800 no-underline font-bold hover:text-gray-900 hover:underline text-sm py-0 py-2 pr-2" :href="submenuItem.url">{{submenuItem.title}}</a>
                </div>
            </div>
    
            <div class="p-4">
                <p class="font-bold tracking-wider uppercase text-xs pb-4 text-purple-700 border-b border-gray-300">About Us</p>
                <div v-for="submenuItem in aboutMenu" :key="submenuItem.title" class="flex flex-column items-center">
                    <a class="inline-block text-gray-800 no-underline font-bold hover:text-gray-900 hover:underline text-sm py-0 py-2 pr-2" :href="submenuItem.url">{{submenuItem.title}}</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MobileNav',
    props: {
        subnavMenu: Array,
        aboutMenu: Array,
        mobileActive: Boolean
    },
    methods: {
        toggleMenu() {
            this.$emit('toggleMenu', !this.mobileActive)
        }
    }
}
</script>

<style lang="postcss" scoped>
.menubg-hidden {
    @apply bg-black bg-opacity-0 pointer-events-none
}

.menubg-show {
    @apply bg-black bg-opacity-75 block
}

.menu-show {
    @apply right-0
}

.menu-hidden {
    right: -100%;
    @apply pointer-events-none
}
</style>