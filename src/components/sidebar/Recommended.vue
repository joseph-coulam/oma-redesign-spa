<template>
    <div v-if="selectedArticles.length > 0" class="w-full inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20">
        <p class="text-base font-bold py-2 lg:pb-4 text-gray-700">Related Articles</p>
        <div v-for="article in selectedArticles" :key="article.id" class="flex flex-column items-center border border-gray-300 rounded mb-4 px-4 py-4">
            <!-- <div class="bg-green-500 w-8 h-8 mr-4 rounded"></div> -->
            <div class="flex flex-col justify-center bg-white">
                <a :href="article.link" target="_blank">
                    <p class="text-sm font-bold text-black mb-2">{{article.title.rendered}}</p>
                    <p class="text-xs text-gray-600" v-html="article.excerpt.rendered"></p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommended',
    props: {
        display: Number,
        recommended: Array
    },
    computed: {
        selectedArticles: function() {
            console.log(this.recommended);
            // `this` points to the vm instance
            return this.recommended.slice(0, this.display);
        }
    },
    mounted() {},
    methods: {}
}
</script>
