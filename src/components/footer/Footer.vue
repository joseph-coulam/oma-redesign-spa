<template>
    <footer class="bg-purple-900 text-white shadow px-4">
        <div class="container mx-auto flex py-8">
            <div class="w-full mx-auto flex flex-col-reverse md:flex-row flex-wrap">

                <div class="flex w-full lg:w-1/3 mb-4">
                    <div class="">
                        <h3 class="font-bold">About</h3>
                        <p class="py-4 text-gray-500 text-sm">
                            ©2020 Online Mortgage Advisor<br>All Rights reserved
                        </p>
                    </div>
                </div>

                <div class="flex w-full lg:w-1/3 mb-4">
                    <div class="">
                        <h3 class="font-bold">Get in touch</h3>
                        <ul class="py-4 text-gray-500 text-sm">
                            <p class="mb-2 underline"><a href="tel:0808 189 2301">0808 189 2301</a></p>
                            <p class="mb-2 underline"><a href="mailto:enquiries@onlinemortgageadvisor.co.uk">Contact</a></p>
                            <p>Online Mortgage Advisor, Unit 2a, Chatsworth House, Prime Business Centre, Raynesway, Derby, DE21 7SR</p>
                        </ul>
                    </div>
                </div>

                <div class="flex w-full lg:w-1/3 lg:justify-end mb-4">
                    <div class="">
                        <h3 class="font-bold">Find us on social media</h3>
                        <div class="flex content-center p-4 pl-0">
                            <a class="block mr-4" href="https://www.facebook.com/OnlineMortgageAdvisor/" target="_blank">
                                <svg id="share_facebook" class="inline-block cursor-pointer transition-colors duration-200 ease-in-out fill-current text-white w-8 h-8 mb-4 hover:text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M16.5,0A16.5,16.5,0,1,0,33,16.5,16.5,16.5,0,0,0,16.5,0Zm3.7,11.6H18.76c-1.13,0-1.35.54-1.35,1.33v1.74h2.7l-.35,2.74H17.4v7H14.58v-7H12.22V14.67h2.36v-2a2.72,2.72,0,0,1,0-.57,3.28,3.28,0,0,1,3.52-3c.7,0,1.4,0,2.1.1Z"/></svg>
                            </a>
                            <a class="block mr-4" href="https://twitter.com/oma_mortgages?lang=en" target="_blank">
                                <svg id="share_twitter" class="inline-block cursor-pointer transition-colors duration-200 ease-in-out fill-current text-white w-8 h-8 mb-4 hover:text-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33"><path d="M16.5,0A16.5,16.5,0,1,0,33,16.5,16.5,16.5,0,0,0,16.5,0Zm6.69,13.59c0,.13,0,.27,0,.41v.12a9.2,9.2,0,0,1-9.26,9.13,9.34,9.34,0,0,1-5-1.46,6.79,6.79,0,0,0,.78,0,6.54,6.54,0,0,0,4-1.39,3.28,3.28,0,0,1-3-2.26,3.28,3.28,0,0,0,1.46-.06,3.25,3.25,0,0,1-2.61-3.19v0A3.31,3.31,0,0,0,11,15.3a3.26,3.26,0,0,1-1.44-2.71A3.15,3.15,0,0,1,10,11a9.2,9.2,0,0,0,6.7,3.4,3.82,3.82,0,0,1-.08-.75,3.25,3.25,0,0,1,5.63-2.22,7,7,0,0,0,2.06-.78,3.27,3.27,0,0,1-1.43,1.8,6.34,6.34,0,0,0,1.87-.52h0A6.35,6.35,0,0,1,23.19,13.59Z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {}
}
</script>
