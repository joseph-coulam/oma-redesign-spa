<template>
    <div class="flex flex-col xl:flex-row">
        <div class="w-full xl:block xl:w-1/2">
            <div class="h-64 w-full md:h-full bg-cover" :style="{ backgroundImage: `url(${selectedImage})` }">
            </div>
        </div>
    
        <div class="flex justify-center flex-col text-center xl:text-left mx-auto p-4 md:p-0 md:w-full xl:w-1/2" style="">
            <div class="p-8 bg-offset bg-white rounded-lg shadow-lg md:shadow-none md:bg-transparent xl:py-12 xl:pl-12">
                <!-- <Tag class="my-2" type="1">Remortgages</Tag> -->
                <h1 class="font-display text-3xl font-semibold text-black md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto" v-html="title"></h1>
                <p class="font-display mt-2 mb-4 text-lg text-gray-800" v-html="subtitle"></p>
                <div class="flex items-center flex-col xl:items-start xl:flex-col mx-auto">
                    <Button class="my-3 mr-3" size="large" url="https://www.onlinemortgageadvisor.co.uk/enquiry/self-employed-sf/">Find my perfect broker</Button>
                    <p class="text-sm text-gray-500">(No effect on your credit score)</p>
                </div>
            </div>
            <div class="pt-8 px-4 xl:border-0 xl:p-8 xl:pl-12 xl:pb-0">
                <Author :authorName="author.name" :authorImage="author.imageUrl" :timestamp="timestamp.modified" />
            </div>
        </div>
    </div>
</template>

<script>
// import Tag from './atoms/Tag';
import Button from './atoms/Button';
import Author from '../components/Author';

export default {
    name: 'Header',
    components: {
        // Tag,
        Button,
        Author
    },
    props: {
        title: String,
        subtitle: String,
        author: Object,
        timestamp: Object,
        categoryName: String
    },
    computed: {
        selectedImage: function() {
            let image = "image-laptop-hands";

            switch (this.categoryName) {
                case "Bad Credit Mortgages":
                    image = "image-pay";
                    break;
                case "Remortgages":
                    image = "image-computer-pay";
                    break
                case "Buy To Let":
                    image = "image-houses";
                    break
                case "Deposits":
                    image = "image-houses";
                    break
                case "Mortgage Applications":
                    image = "image-signing";
                    break
                case "Bridging Loans":
                    image = "image-laptop";
                    break
                case "Self-Employed Mortgages":
                    image = "image-laptop";
                    break
                default:
                    break;
            }

            let images = require.context('@/assets/', false, /\.jpg$/);
            return images('./' + image + ".jpg")
        }
    }
}
</script>

<style lang="postcss">
.bg-offset {
    position: relative;
    margin-top: -150px;
}

.bg-offset::before {
    display: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100vw;
    z-index: -1;
}

@screen md {
    .bg-offset {
        position: relative;
        margin-top: auto;
    }
    .bg-offset::before {
        @apply block bg-purple-100
    }
}

.box {
    @apply bg-white mx-auto my-6 py-4 px-6 border-t-4 border-purple-500 shadow-lg max-w-md
}

@screen xl {
    .box {
        @apply mx-0
    }
}

.box p {
    @apply text-sm
}

.box strong {
    @apply text-lg mb-2 inline-block !important
}

@screen xl {
    .bg-offset::before {
        transform: translateX( -50%);
    }
}
</style>