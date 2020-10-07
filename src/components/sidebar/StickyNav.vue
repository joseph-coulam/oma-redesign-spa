<template>
    <div class="font-display px-4 md:px-0 w-full mb-8 overflow-y-auto" id="menu-content" style="max-height:75vh;">
        <div class="rounded-lg border md:border-none mx-auto overflow-hidden md:w-full">
            <div @click="toggleShow" class="px-4 inline-block md:hidden flex py-2 items-center hover:bg-purple-100 transition-bg duration-300 cursor-pointer">
                <p class="select-none inline-block m-0 md:mb-8 font-bold tracking-wider uppercase text-sm">In this Article</p>
                <div class="ml-auto bg-transparent rounded-full h-10 w-10 flex items-center justify-center" style="transition: transform 150ms ease;" :class="{'flip': isVisible}">
                    <svg aria-hidden="true" data-reactid="266" fill="none" height="24" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
    
            <p class="hidden md:inline-block mt-2 mb-4 md:mb-0 font-bold tracking-wider uppercase text-sm">In this Article</p>
    
            <ul class="border-t md:border-none md:block list-reset py-4 pr-4" :class="{'hidden': !isVisible}">
                <li v-for="(links, index) in selectedAnchors" :key="index">
                    <a v-if="links.id" :href="`#${links.id}`" class="">
                        <p class="border-l-4 xl:border-l-4 border-gray-200 hover:border-purple-500 pl-4 md:pl-6 py-1 md:py-2 hover:text-gray-900 text-base md:text-sm text-black leading-relaxed transition-all duraiton-500 ease-in-out">
                            {{links.innerText}}
                        </p>
                    </a>
                </li>
                <button @click="showAllLinks" v-if="selectedAnchors.length < anchorLinks.length" class="pl-4 md:pl-0 mt-6 text-sm font-bold hover:underline">View More</button>
            </ul>
        </div>
    </div>
</template>


<script>

export default {
    name: 'StickyNav',
    props: {
        anchorLinks: Array
    },
    data() {
        return {
            isVisible: false,
            display: 6,
            count: 0,
        }
    },
    computed: {
        selectedAnchors() {
            return this.anchorLinks.slice(0, this.display);
        }
    },
    methods: {
        toggleShow() {
            this.isVisible = !this.isVisible;
        },
        showAllLinks(){
            this.display = this.anchorLinks.length
        }
    }
}
</script>

<style>
.flip {
    transform: rotate(180deg);
}
</style>