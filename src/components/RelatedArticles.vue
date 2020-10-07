<template>
    <nav id="header" class="bg-gray-300 py-16">
        <div class="container mx-auto w-full text-center" id="nav-content">
            <h3 class="text-2xl pl-4 mb-4 font-bold leading-tight text-black">Other Articles about <span class="text-purple-600">{{categoryName}}</span></h3>
            <div class="flex content-start flex-wrap py-4">
                <div v-for="article in selectedArticles" :key="article.id" class="px-2 flex flex-col mb-4 mx-auto w-11/12 md:w-1/3">
                    <a class="text-gray-700 cursor-pointer hover:text-orange-500" :href="article.link">
                        <div class="px-6 py-10 bg-purple-100 hover:bg-white rounded-lg transition-all duration-300 hover:shadow-lg">
                            <h3 class="text-2xl mb-4 font-bold leading-tight text-black mx-auto" v-html="article.title.rendered"></h3>
                            <p class="mt-2 mb-4 text-lg text-gray-700" v-html="article.excerpt.rendered"></p>
                            <p class="font-bold">Read this article</p>
                        </div>
                    </a>
                </div>
            </div>
            <div @click="display = recommended.length" v-if="selectedArticles.length < recommended.length" class="inline-block cursor-pointer font-semibold py-2 px-6 mx-auto rounded-full outline-none border-2 border-gray-600 transition-colors ease-in-out duration-300 text-gray-800 hover:border-black hover:text-black">
            View more</div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'RelatedArticles',
    props: {
        categoryName: String,
        recommended: Array
    },
    data: function() {
        return {
            show: false,
            display: 3
        }
    },
    computed: {
        selectedArticles: function() {
            return this.recommended.slice(0, this.display);
        }
    },
}
</script>

<style>

</style>
