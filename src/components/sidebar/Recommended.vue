<template>
    <div v-if="selectedArticles.length > 0" class="w-full bg-white">
        <p class="mt-2 mb-8 font-bold tracking-wider uppercase text-sm">Related Articles</p>
        <div v-for="article in selectedArticles" :key="article.id" class="flex flex-column items-center">
            <!-- <div class="bg-green-500 w-8 h-8 mr-4 rounded"></div> -->
            <div class="flex flex-col justify-center border-l-4 border-gray-200 hover:border-purple-500 pl-4 py-0 mb-4 transition-all duraiton-500 ease-in-out">
                <a :href="article.link" target="_blank">
                    <p class="text-indigo text-xl mb-2">{{article.title.rendered}}</p>
                    <p class="text-sm text-black leading-relaxed" v-html="article.excerpt.rendered"></p>
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
            return this.recommended.slice(0, this.display);
        }
    },
    mounted() {},
    methods: {}
}
</script>