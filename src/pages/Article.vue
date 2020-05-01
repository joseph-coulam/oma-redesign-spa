<template>
    <div class="">
        <vue-scroll-progress-bar backgroundColor="linear-gradient(to right, #ED653D, #ED653D)" zIndex="100" height=".3rem" />
        <div id="layout" class="bg-white-100 tracking-normal">
            <!--Nav-->
    
            <div :class="{'min-h-screen':!loaded}" class="w-full mx-auto pt-20 lg:pt-20 flex flex-col">
                <div class="flex flex-initial">
                    <Nav />
                    <SubNav />
                </div>
                <div v-if="!loaded" class="container flex flex-1 justify-center items-center content-center w-full mx-auto">
                    <Loading />
                </div>
            </div>
    
            <div v-if="loaded">
                <!-- Header -->
                <div class="container w-full mx-auto px-2">
                    <Header :title="this.content.title" :subtitle="this.content.subtitle" :author="this.author" :timestamp="this.timestamp" />
                </div>
    
                <!-- Content -->
                <div class="container w-full flex flex-wrap mx-auto px-2 py-8 lg:pt-16">
    
                    <div class="w-full lg:w-1/12 text-xl text-gray-800 leading-normal">
                        <Sharebar />
                    </div>
    
                    <div class="w-full lg:w-8/12 py-0 px-0 text-gray-900 leading-normal bg-white">
                        <WPContent :content="this.content.article" @generateAnchorLinks="generateAnchorLinks" />
                    </div>
    
                    <div class="w-full lg:w-3/12 text-xl text-gray-800 leading-normal">
                        <Sidebar :anchorLinks="this.anchorLinks" :recommended="this.relatedArticles" />
                    </div>
    
                </div>
            </div>
            <FooterNav />
            <Footer />
    
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Nav from '@/components/Nav.vue'
import SubNav from '@/components/SubNav.vue'
// import Breadcrumb from '@/components/Breadcrumb.vue'
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import WPContent from '@/components/WPContent.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'
import Sharebar from '@/components/Sharebar.vue'
import FooterNav from '@/components/footer/FooterNav.vue'
import Footer from '@/components/footer/Footer.vue'
import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'

export default {
    name: 'Page',

    components: {
        Nav,
        SubNav,
        VueScrollProgressBar,
        // Breadcrumb,
        Header,
        Loading,
        WPContent,
        Sidebar,
        Sharebar,
        FooterNav,
        Footer
    },

    data() {
        return {
            loaded: false,
            progress: 0,
            baseUrl: 'https://onlinemortgageadvisor.co.uk/wp-json/wp/v2/posts/',
            timestamp: {},
            content: {},
            featuredMedia: {},
            entryPoints: {},
            relatedArticles: {},
            author: {},
            categories: {},
            tags: {},
            anchorLinks: []
        }
    },

    created() {
        this.fetchData()
    },

    mounted() {},
    watch: {
        // '$route': 'fetchData'
    },

    methods: {
        generateAnchorLinks(data) {
            this.anchorLinks = data;
        },
        fetchData() {
            axios.get(`${this.baseUrl}${this.$route.params.id}/`)
                .then((resp) => {
                    this.loaded = true;

                    const data = resp.data;
                    // this.slug = data.slug;
                    // this.link = data.link;

                    this.timestamp = {
                        date: data.date,
                        modified: data.modified
                    }

                    this.content = {
                        title: data.acf.hero_title_alternate,
                        subtitle: data.acf.hero_title_alternate,
                        summarys: data.acf.hero_summary_alternate,
                        article: data.content.rendered,
                        excerpt: data.excerpt.rendered
                    }

                    this.featuredMedia = {

                    }

                    this.entryPoints = {
                        entryRelated: `https://onlinemortgageadvisor.co.uk/wp-json/wp/v2/posts?categories=${data.categories[0]}`,
                        entryAuthor: data._links.author[0].href,
                        entryCategories: data._links['wp:term'][0].href,
                        entryTags: data._links['wp:term'][1].href
                    }

                    const requestRelated = axios.get(this.entryPoints.entryRelated);
                    const requestAuthor = axios.get(this.entryPoints.entryAuthor);
                    const requestCategories = axios.get(this.entryPoints.entryCategories);
                    const requestTags = axios.get(this.entryPoints.entryTags);

                    axios.all([requestRelated, requestAuthor, requestCategories, requestTags]).then(axios.spread((...responses) => {
                        this.relatedArticles = responses[0].data
                        this.author = responses[1].data
                        this.author.imageUrl = this.author.avatar_urls[96]
                        this.categories = responses[2].data
                        this.tags = responses[3].data

                    })).catch((err) => {
                        console.log(err);
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}
</script>

<style>

</style>