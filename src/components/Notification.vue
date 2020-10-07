<template>
    <div class="w-full bg-purple-900 border-none">
        <div class="w-full container text-base md:text-lg text-left md:text-center text-purple-100 mx-auto mt-0 p-4 md:p-5">
            <span class="font-display font-semibold">Coronavirus update:</span> We're here and ready to help! <a href="https://www.onlinemortgageadvisor.co.uk/contact-us/" target="_blank">Get in touch</a> or <a href="https://www.onlinemortgageadvisor.co.uk/blog/coronavirus-and-mortgages/" target="_blank">read our latest mortgage update</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notification',
    props: {}
}
</script>

<style lang="postcss" scoped>
a {
    @apply underline text-purple-100;
}
</style>