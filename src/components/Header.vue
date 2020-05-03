<template>
    <div class="flex flex-row-reverse">
    
        <div class="flex justify-center flex-col text-left lg:w-1/2">
            <div class="bg-offset py-12 pl-12">
                <Tag class="my-2" type="1">Remortgages</Tag>
                <h1 class="my-4 text-3xl font-bold text-black md:text-5xl leading-tight">{{title}}</h1>
                <p class="mt-2 mb-4 text-lg text-gray-800">{{subtitle}}</p>
                <div class="flex items-center flex-row">
                    <Button class="my-3 mr-3" size="large">Get Started</Button>
                    <p class="text-sm text-gray-500">(No effect on your credit score)</p>
                </div>
            </div>
            <div class="pl-12">
                <Author :authorName="author.name" :authorImage="author.imageUrl" :timestamp="timestamp.modified" />
            </div>
        </div>
        
        <div class="hidden lg:block lg:w-1/2">
            <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
                <div class="h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Tag from './atoms/Tag';
import Button from './atoms/Button';
import Author from '../components/Author';

export default {
    name: 'Header',
    components: {
        Tag,
        Button,
        Author
    },
    props: {
        title: String,
        subtitle: String,
        author: Object,
        timestamp: Object
    }
}
</script>

<style lang="postcss">
.bg-offset {
    position: relative;
}

.bg-offset::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateX( -50%);
    height: 100%;
    width: 100vw;
    z-index: -1;
    @apply bg-gray-200
}
</style>