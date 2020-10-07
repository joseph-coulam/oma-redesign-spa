<template>
    <div id="article">
    
        <div id="layout" class="bg-purple-100 tracking-normal">
    
            <!-- Components that sit outside of the core structure -->
            <BackToTop :scrollHeight="500" />
    
            <!-- We calculate the height of all nav bars here, to fill the remaining height of the page -->
            <Notification class="nav" />
            <Nav :aboutMenu="aboutMenu" :subnavMenu="subnavMenu" class="nav" />
            <SubNav :subnavMenu="subnavMenu" class="nav" />
    
            <!-- Main body content -->
            <div class="w-full mx-auto flex flex-col" :style="{'min-height': `calc(100vh - ${navHeight}px`}">
                <transition name="fade">
    
                    <!-- Show Loading -->
                    <div class="container flex flex-1 justify-center items-center content-center w-full mx-auto my-8">
                        <div class="w-3/4 mx-auto" v-html="formHtml"></div>
                    </div>
    
                </transition>
            </div>
    
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
import BackToTop from '@/components/BackToTop.vue'
import FooterNav from '@/components/footer/FooterNav.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
    name: 'Page',

    components: {
        Notification,
        Nav,
        SubNav,
        BackToTop,
        FooterNav,
        Footer,
    },

    data() {
        return {
            navHeight: 0,
            baseUrl: `https://onlinemortgageadvisor.co.uk/wp-json/frm/v2/forms/${this.$route.params.id}?return=html`,
            formHtml: '',
            subnavMenu: [
                { title: "Bad Credit Mortgages", url: `${this.base}/bad-credit-mortgages/how-to-get-a-mortgage-with-bad-credit/` },
                { title: "Remortgages", url: `${this.base}/remortgages/remortgage-guide/` },
                { title: "Buy To Let", url: `${this.base}/buy-to-let-mortgages/` },
                { title: "Deposits", url: `${this.base}/deposits/` },
                { title: "Mortgage Applications", url: `${this.base}/mortgage-application/` },
                { title: "Bridging Loans", url: `${this.base}/bridging-finance/` },
                { title: "Self-Employed Mortgages", url: `${this.base}/self-employed-mortgages/self-employed-mortgage-guide/` },
                { title: "Commercial Mortgages", url: `${this.base}/commercial-mortgages/` }
            ],
            aboutMenu: [
                { title: "About us", url: `${this.base}/about-us/` },
                { title: "Mortgages", url: `${this.base}/mortgages/` },
                { title: "Why are our services free?", url: `${this.base}/why-are-our-services-free/` },
                { title: "Blog", url: `${this.base}/blog/` },
                { title: "Contact us", url: `${this.base}/contact-us/` }
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
        fetchData() {
            axios.get(`${this.baseUrl}`)
                .then((resp) => {
                    this.formHtml = resp.data.renderedHtml
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    }
}
</script>

<style lang="postcss">
form p {
    @apply text-sm text-gray-700 mb-4
}

input:focus {
    outline: 0;
}

input[type=number] {
    @apply block px-4 py-3 rounded w-full bg-white border-2 border-gray-300 w-1/2 mx-auto mb-4 transition-colors duration-200
}

input[type=number]:focus {
    @apply border-purple-500
}

input[type=text] {
    @apply block px-4 py-3 rounded w-full bg-white border-2 border-gray-300 w-1/2 mx-auto mb-4
}

.frm_opt_container {
    @apply flex flex-wrap
}

.frm_radio {
    @apply w-1/3 pr-4
}

.frm_radio label {
    @apply text-center my-2 inline-block rounded-lg px-4 py-4 cursor-pointer w-full
}

input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
}

.frm_radio label {
    @apply inline-block bg-gray-200 px-4 py-4 text-lg rounded-lg transition-all duration-100 border-white border-2
}

.frm_radio label:hover {
    @apply bg-purple-500 shadow-lg text-white border-purple-500 border-2
}

.frm_top_container {
    @apply mt-8 mb-16
}

.frm_primary_label {
    @apply inline-block w-full text-center font-light text-xl text-gray-600 mb-2
}

.frm_section_heading {
    @apply bg-white p-8 px-16 my-4 rounded-lg
}

.frm_final_submit {
    @apply inline-block text-center font-semibold mx-auto text-lg py-4 px-10 rounded-full rounded-full outline-none transition-colors ease-in-out duration-300 bg-green-500 text-white
}
</style>