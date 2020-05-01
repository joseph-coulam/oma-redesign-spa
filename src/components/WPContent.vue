<template>
    <div id="wp-content" v-html="this.content" class="w-full py-0 text-gray-900 leading-normal bg-white">
    </div>
</template>

<script>
export default {
    name: 'WPContent',
    props: {
        content: String,
    },
    mounted() {
        // We have to do some anti-vue dom maniupulation, rendering v-html as we only recieve it as a string
        const tables = document.getElementsByTagName('table');
        [...tables].forEach(this.wrapTable);

        const headers = document.getElementsByTagName('h2');
        this.generateAnchorLinks([...headers]);
    },
    methods: {
        wrapTable(item) {
            const wrapper = document.createElement('div');
            wrapper.className = "table-wrapper";
            item.parentNode.insertBefore(wrapper, item);
            wrapper.appendChild(item);
        },
        generateAnchorLinks(linkArray){
            this.$emit('generateAnchorLinks', linkArray)
        }
    }
}
</script>

<style lang="postcss">
#wp-content a {
    @apply underline text-orange-500 font-semibold;
}

#wp-content p:first-of-type {
    @apply text-xl;
}

#wp-content p {
    @apply text-black mb-6 leading-relaxed antialiased;
}

#wp-content ul {
    @apply mb-6;
}

#wp-content li {
    @apply text-sm mb-2;
}

#wp-content h2 {
    @apply text-black mb-6 mt-10 text-2xl font-bold leading-snug;
}

#wp-content h3 {
    @apply text-gray-800 mb-4 mt-10 text-xl font-bold leading-snug;
}

#wp-content h4 {
    @apply text-black text-gray-700 mb-4 mt-10 text-lg font-semibold leading-snug;
}

@screen md {
    #wp-content h2 {
        @apply text-black mb-6 mt-10 text-3xl font-bold leading-snug w-5/6;
    }
    #wp-content h3 {
        @apply text-gray-800 mb-4 mt-10 text-xl font-bold leading-snug w-5/6;
    }
    #wp-content h4 {
        @apply text-black mb-4 mt-10 text-lg font-semibold leading-snug w-5/6;
    }
}

.feefo-cta::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: red;
    left: 58%;
    right: 42%;
    margin-left: -50vw;
    margin-right: -50vw;
    @apply bg-gray-200 z-0;
}

.feefo-cta {
    @apply relative my-12 p-0;
}

.feefo-cta__body {
    @apply relative py-8 bg-gray-200 rounded-t-lg z-10;
}

.feefo-cta__footer {
    @apply relative flex flex-row pt-0 pb-8 bg-gray-200 rounded-b-lg z-10;
}

.feefo-cta__title {
    @apply text-black font-bold text-2xl leading-snug w-5/6 mb-3 !important;
}

.feefo-cta__text {
    @apply text-gray-600 w-5/6 mb-4 !important;
}

.feefo-cta__list {
    @apply border-t-2 border-b-2 flex flex-row flex-wrap py-4 mb-0 !important;
}

.feefo-cta__list li {
    @apply w-1/2 my-2 pr-8 !important;
}

.feefo-cta__logo-wrap {
    @apply flex flex-col w-1/2;
}

.feefo-cta__logo-wrap img {
    @apply inline-block w-4/12;
}

.feefo-cta__button {
    @apply flex flex-col justify-center text-center content-center font-bold text-base py-2 px-6 rounded-lg bg-green-500 text-white no-underline !important;
}

.feefo-cta__button span {
    @apply text-white font-normal text-sm !important;
}

.table-wrapper {
    @apply overflow-scroll bg-white mb-8 rounded-lg shadow text-left relative;
}

table {
    @apply border-collapse table-auto w-full whitespace-no-wrap bg-white relative !important;
}

thead tr td {
    @apply sticky top-0 border-b px-6 py-4 bg-purple-900 text-white font-bold tracking-wider uppercase text-xs !important;
}

tbody tr td {
    @apply text-gray-700 px-6 py-3 items-center !important;
}

tr {
    @apply text-left bg-gray-100;
}

th {
    @apply py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100 !important;
}

td {
    @apply border-dashed border-t border-gray-200 px-3 !important;
}
</style>
