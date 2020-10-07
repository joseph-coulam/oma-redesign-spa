<template>
    <div id="article">
    
        <vue-scroll-progress-bar backgroundColor="linear-gradient(to right, #ED653D, #ED653D)" zIndex="100" height=".3rem" />
    
        <div id="layout" class="bg-white-100 tracking-normal">
    
            <!-- Components that sit outside of the core structure -->
            <StickyMessage />
            <BackToTop :scrollHeight="500" />
            <Snackbar :message="snackbarMessage" />
    
            <!-- We calculate the height of all nav bars here, to fill the remaining height of the page -->
            <Notification class="nav" />
            <Nav :aboutMenu="aboutMenu" :subnavMenu="subnavMenu" class="nav" />
            <SubNav :subnavMenu="subnavMenu" class="nav" />
    
            <!-- Main body content -->
            <div class="w-full mx-auto flex flex-col" :style="{'min-height': `calc(100vh - ${navHeight}px`}">
                <transition name="fade">
    
                    <!-- Show Loading -->
                    <div v-if="!loaded" class="container flex flex-1 justify-center items-center content-center w-full mx-auto">
                        <Loading />
                    </div>
    
                    <!-- Show Content -->
                    <div v-else>
                        
                        <div class="max-w-screen-xl w-full mx-auto">
                            <Header v-if="categories.length > 0" :categoryName="categories[0].name" :title="content.title" :subtitle="content.subtitle" :author="author" :timestamp="timestamp" />
                        </div>
    
                        <div class="container w-full mx-auto px-4 lg:px-0 ">
                            <Breadcrumb v-if="categories.length > 0" :categoryName="categories[0].name" :categoryLink="categories[0].link" :page="content.title" />
                        </div>
    
                        <div class="container w-full flex flex-col-reverse lg:flex-row flex-wrap mx-auto py-8 lg:pt-16">
    
                            <div class="w-full lg:w-1/12 text-xl text-gray-800 leading-normal">
                                <div class="w-full sticky inset-0 hidden lg:block mt-2 px-8 z-20" style="top:5em;">
                                    <Sharebar @showSnackbar="showSnackbar" />
                                </div>
                            </div>
    
                            <div class="w-full lg:w-7/12 px-4 md:pr-12 text-gray-900 leading-normal bg-white">
                                <WPContent :content="content.article" @generateAnchorLinks="generateAnchorLinks" />
    
                                <div class="md:hidden inline-block">
                                    <Sharebar @showSnackbar="showSnackbar" />
                                </div>

                                <FCA />
                            </div>
    
                            <div class="w-full lg:w-4/12 text-xl text-gray-800 leading-normal">
                                <div class="w-full h-full bg-white">
                                    <div class="hidden lg:block mb-8 px-4">
                                        <Recommended :recommended="relatedArticles" :display="2" />
                                    </div>
                                    <div class="w-full sticky z-20 md:px-4 md:pb-4" style="top:5em;">
                                        <StickyNav v-if="anchorLinks.length > 0" :anchorLinks="anchorLinks" />
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </transition>
            </div>
    
            <RelatedArticles v-if="categories.length > 0" :categoryName="categories[0].name" :recommended="relatedArticles" :display="3" />
            <FooterNav :aboutMenu="aboutMenu" :subnavMenu="subnavMenu" />
            <Footer />
    
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Notification from '@/components/Notification.vue'
import Nav from '@/components/Nav.vue'
import SubNav from '@/components/SubNav.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Header from '@/components/Header.vue'
import Loading from '@/components/Loading.vue'
import WPContent from '@/components/WPContent.vue'
import StickyMessage from '@/components/StickyMessage.vue'
import BackToTop from '@/components/BackToTop.vue'
import Sharebar from '@/components/Sharebar.vue'
import FooterNav from '@/components/footer/FooterNav.vue'
import Footer from '@/components/footer/Footer.vue'
import Recommended from '@/components/sidebar/Recommended'
import StickyNav from '@/components/sidebar/StickyNav'
import Snackbar from '@/components/global/TheSnackbar'
import RelatedArticles from '@/components/RelatedArticles'
import FCA from '@/components/FCA'

import { VueScrollProgressBar } from '@guillaumebriday/vue-scroll-progress-bar'

export default {
    name: 'Page',

    components: {
        Notification,
        Nav,
        SubNav,
        Recommended,
        StickyNav,
        VueScrollProgressBar,
        Breadcrumb,
        Snackbar,
        StickyMessage,
        BackToTop,
        Header,
        Loading,
        WPContent,
        Sharebar,
        FooterNav,
        Footer,
        RelatedArticles,
        FCA
    },

    data() {
        return {
            loaded: false,
            progress: 0,
            base: "https://onlinemortgageadvisor.co.uk/",
            baseUrl: `https://onlinemortgageadvisor.co.uk/wp-json/wp/v2/posts?slug=`,
            slug: "getting-self-employed-mortgages-with-1-years-accounts",
            timestamp: {},
            content: {},
            featuredMedia: {},
            entryPoints: {},
            relatedArticles: [],
            author: {},
            categories: {},
            tags: {},
            navHeight: 0,
            anchorLinks: [],
            snackbarMessage: '',
            subnavMenu: [
                { title: "Bad Credit Mortgages", url: `https://onlinemortgageadvisor.co.uk/bad-credit-mortgages/how-to-get-a-mortgage-with-bad-credit/` },
                { title: "Remortgages", url: `https://onlinemortgageadvisor.co.uk/remortgages/remortgage-guide/` },
                { title: "Buy To Let", url: `https://onlinemortgageadvisor.co.uk/buy-to-let-mortgages/` },
                { title: "Deposits", url: `https://onlinemortgageadvisor.co.uk/deposits/` },
                { title: "Mortgage Applications", url: `https://onlinemortgageadvisor.co.uk/mortgage-application/` },
                { title: "Bridging Loans", url: `https://onlinemortgageadvisor.co.uk}/bridging-finance/` },
                { title: "Self-Employed Mortgages", url: `https://onlinemortgageadvisor.co.uk/self-employed-mortgages/self-employed-mortgage-guide/` },
                { title: "Commercial Mortgages", url: `https://onlinemortgageadvisor.co.uk/commercial-mortgages/` }
            ],
            aboutMenu: [
                { title: "About us", url: `https://onlinemortgageadvisor.co.uk/about-us/` },
                { title: "Mortgages", url: `https://onlinemortgageadvisor.co.uk/mortgages/` },
                { title: "Why are our services free?", url: `https://onlinemortgageadvisor.co.uk/why-are-our-services-free/` },
                { title: "Blog", url: `https://onlinemortgageadvisor.co.uk/blog/` },
                { title: "Contact us", url: `https://onlinemortgageadvisor.co.uk/contact-us/` }
            ]
        }
    },

    created() {
        this.fetchData()
    },

    mounted() {
        const navElements = document.getElementsByClassName('nav');
        let navHeight = 0;
        [...navElements].forEach(function(el) {
            navHeight += el.clientHeight;
        })
        this.navHeight = navHeight;
    },

    methods: {

        generateAnchorLinks(data) {
            this.anchorLinks = data
        },

        showSnackbar(message) {
            this.snackbarMessage = message
        },

        fetchData() {
            axios.get(`${this.baseUrl}${this.slug}/`)
                .then((resp) => {

                    console.log(resp);

                    const data = resp.data[0];

                    this.timestamp = {
                        date: data.date,
                        modified: data.modified
                    }

                    this.link = data.link

                    this.content = {
                        canonical: data.link,
                        title: data.acf.hero_title_alternate,
                        subtitle: data.acf.hero_summary_alternate,
                        summarys: data.acf.hero_summary_alternate,
                        article: data.content.rendered,
                        excerpt: data.excerpt.rendered
                    }

                    this.featuredMedia = {

                    }

                    this.entryPoints = {
                        entryRelated: `${this.base}/wp-json/wp/v2/posts?categories=${data.categories[0]}`,
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

                        this.loaded = true;

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