<template>
    <div v-if="selectedArticles.length > 0" class="w-full bg-white px-8">
        <p class="py-2 mb-2 font-bold tracking-wider uppercase text-sm">Related Articles</p>
        <div v-for="article in selectedArticles" :key="article.id" class="flex flex-column border-t border-gray-300 items-center py-4">
            <!-- <div class="bg-green-500 w-8 h-8 mr-4 rounded"></div> -->
            <div class="flex flex-col justify-center bg-white">
                <a :href="article.link" target="_blank">
                    <p class="text-base font-bold text-black mb-2">{{article.title.rendered}}</p>
                    <p class="text-sm text-gray-600" v-html="article.excerpt.rendered"></p>
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
