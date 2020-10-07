<template>
    <div>
        <div id="wp-content" v-html="this.replaceNewlines" class="w-full text-gray-900 leading-normal bg-white mb-8">
        </div>
    </div>
</template>

<script>
export default {
    name: 'WPContent',
    props: {
        content: String,
    },
    computed: {
        replaceNewlines() {
            return this.content.replace(/\n\n/g, "<p></p>");
        }
    },
    mounted() {

        // We have to do some anti-vue dom maniupulation, rendering v-html as we only recieve it as a string
        const wordpressContent = document.getElementById("wp-content");

        const tables = wordpressContent.getElementsByTagName('table');
        [...tables].forEach(this.wrapTable);

        const links = wordpressContent.getElementsByTagName('a');
        [...links].forEach(this.fixRelativeUrl);

        const headers = document.getElementsByTagName('h2');
        this.generateAnchorLinks([...headers]);

        const reassuranceMessage = document.getElementsByClassName('feefo-cta');
        [...reassuranceMessage].forEach(this.addAnimation);
    },
    methods: {
        wrapTable(item) {
            const wrapper = document.createElement('div');
            wrapper.className = "table-wrapper";
            item.parentNode.insertBefore(wrapper, item);
            wrapper.appendChild(item);
        },
        generateAnchorLinks(linkArray) {
            this.$emit('generateAnchorLinks', linkArray)
        },
        addAnimation(item) {
            item.setAttribute('data-aos', 'fade-in');
        },
        // Fixes issues with relative urls whilst test
        fixRelativeUrl(url) {
            // const regex =  \#(.*)
            if (url.href.includes('#')) {
                url.href = `#${url.href.substring(url.href.indexOf("#") + 1)}`;
            }
        }
    }
}
</script>

<style lang="postcss">
#wp-content {
    @apply text-lg text-gray-900 leading-relaxed antialiased;
}

#wp-content a {
    @apply text-orange-500 font-bold;
}

#wp-content p:first-of-type {
    @apply text-xl;
}

@screen md {
    #wp-content p:first-of-type {
        @apply text-xl;
    }
}

#wp-content p {
    @apply mb-6;
}

#wp-content ol {
    counter-reset: li-counter;
    @apply my-6 list-none;
}

#wp-content ol li {
    counter-increment: li-counter;
    @apply mb-4;
}

#wp-content ol li::before {
    content: counter(li-counter) ". ";
    @apply font-bold text-purple-600 mr-1 text-xl;
}

#wp-content ul {
    @apply my-4 list-disc ml-4;
}

#wp-content ul li {
    @apply mb-1;
}

#wp-content ul li a {
    @apply border-b border-gray-400 font-semibold no-underline text-black mb-0 p-0 transition-all ease-in-out duration-200;
}

#wp-content ul li a:hover {
    @apply border-b-2 text-gray-900 border-black;
}

#wp-content ul li li {
    @apply my-2 ml-4;
}

#wp-content ul ul {
    @apply my-0;
}

#wp-content h2 {
    margin-top: -80px !important;
    padding-top: 120px !important;
    @apply text-black mb-6 text-2xl font-bold leading-snug;
}

#wp-content h3 {
    margin-top: -80px !important;
    padding-top: 120px !important;
    @apply text-gray-800 mb-4 mt-10 text-xl font-bold leading-snug;
}

#wp-content h4 {
    @apply text-black mb-3 mt-10 text-sm font-bold uppercase tracking-wide leading-snug text-gray-700;
}

#wp-content iframe {
    @apply w-full
}

#wp-content .btn {
    @apply font-semibold text-base pt-3 pb-4 px-6 my-2 font-bold rounded-full outline-none transition-all ease-in-out duration-300 bg-green-500 text-white;
}

#wp-content .btn:hover {
    @apply text-white shadow-lg border-0 bg-green-700;
}

.feefo-cta__button {
    @apply flex flex-col w-5/6 justify-center text-center content-center font-bold text-base pt-1 pb-2 px-6 rounded-lg bg-green-500 text-white no-underline !important;
}

@screen md {
    #wp-content h2 {
        @apply text-black mb-6 mt-10 text-3xl font-bold leading-snug w-5/6;
    }
    #wp-content h3 {
        @apply text-gray-800 mb-4 mt-10 text-xl font-bold leading-snug w-5/6;
    }
    #wp-content h4 {
        @apply text-black mb-3 mt-10 text-sm font-bold uppercase tracking-wide leading-snug text-gray-700;
    }
    .feefo-cta__button {
        @apply w-8/12 flex inline-flex text-center text-lg !important;
    }
}

.feefo-cta {
    @apply relative my-12 bg-purple-100 px-4 py-8;
}

.feefo-cta__body {
    @apply relative mx-auto text-center z-10;
}

.feefo-cta__footer {
    @apply relative flex flex-col pt-0 rounded-b-lg z-10;
}

.feefo-cta__title {
    @apply text-black mx-auto font-bold text-2xl leading-snug mb-2 !important;
}

.feefo-cta__text {
    @apply text-gray-600 font-normal leading-snug text-xl mb-2 !important;
}

.feefo-cta__button {
    @apply mx-auto !important;
}

@screen md {
    .feefo-cta__body {
        @apply text-center w-3/4;
    }
    .feefo-cta__footer {
        @apply relative flex flex-col pt-0 rounded-b-lg z-10;
    }
    .feefo-cta__title {
        @apply text-3xl !important;
    }
    .feefo-cta__text {
        @apply text-xl !important;
    }
}

.feefo-cta__list {
    @apply text-white flex flex-row flex-wrap p-0 m-0 list-none !important;
}

.feefo-cta__list li {
    @apply hidden my-2 text-black py-4 px-6 bg-white rounded-lg !important;
}

.feefo-cta__logo-wrap {
    @apply hidden !important;
}

.feefo-cta__logo-wrap img {
    @apply inline-block w-3/12 pb-3;
}

.feefo-cta__button:hover {
    @apply bg-green-700 !important;
}

.feefo-cta__button span {
    @apply text-white font-normal text-sm;
}

.wp-block-media-text {
    @apply flex bg-gray-100 flex-col py-12 px-6 text-center;
}

.wp-block-media-text__content p {
    @apply hidden
}

.wp-block-media-text__media img {
    @apply mx-auto w-full mb-4;
}

@screen md {
    .wp-block-media-text {
        @apply flex-col;
    }
    .wp-block-media-text__media img {
        @apply w-10/12 mb-4;
    }
}

.wp-block-media-text hr {
    @apply hidden;
}

.wp-block-media-text__content {
    @apply pl-8 flex flex-col justify-center content-center;
}

.wp-block-media-text__content h4 {
    @apply text-2xl m-0 mb-1 w-full leading-snug normal-case !important;
}

.wp-block-media-text__content p {
    @apply text-base text-gray-600 m-0 mb-4 !important;
}

.wp-block-button a {
    @apply text-white bg-green-500 text-lg font-bold no-underline inline-block py-3 px-6 mt-4 rounded-full leading-none !important;
}

.wp-block-button a:hover {
    @apply bg-green-700 !important;
}

.table-wrapper {
    max-height: 80vh;
    @apply overflow-scroll scrolling-touch scrolling-auto bg-white my-8 shadow-lg text-left relative rounded-lg;
}

table {
    @apply table-fixed border-collapse table-auto w-full bg-white relative;
}

thead tr td {
    @apply w-8/12 sticky top-0 border-b px-6 py-4 bg-purple-900 text-white font-bold tracking-wider uppercase text-xs text-left !important;
}

tbody tr td {
    @apply w-8/12 text-sm text-gray-700 px-6 py-3 items-center text-left !important;
}

tbody tr td a {
    @apply text-sm text-purple-900 font-semibold !important;
}

tr {
    @apply text-left bg-gray-100;
}

tr:nth-child(even) {
    @apply bg-white;
}
</style>
