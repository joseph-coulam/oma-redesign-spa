<template>
    <div class="flex bg-white">    
        <div class="flex justify-center flex-col text-center lg:text-left px-8 py-16 md:px-12 lg:w-1/2">
                <!-- <div class="bg-red-500 absolute t-0 l-0 h-full"></div> -->

            <div class="">
                <Tag class="my-2" type="1">Remortgages</Tag>
                <h1 class="my-4 text-4xl font-semibold text-gray-800 md:text-5xl md:leading-tight">A Complete Guide to Remortgaging</h1>
                <p class="mt-2 mb-4 text-lg text-gray-800">Thinking about remortgaging? Get the info you’re looking for, then get advice from one of the expert brokers we work with</p>
                <div class="flex items-center flex-row">
                    <Button class="my-3 mr-3" size="large">Get Started</Button>
                    <p class="text-sm text-gray-500">(No effect on your credit score)</p>
                </div>
            </div>
            <div>
                <Author />
            </div>
    
        </div>
    
    </div>
</template>

<script>
import Tag from '@/components/atoms/Tag';
import Button from '@/components/atoms/Button';
import Author from '@/components/Author';

export default {
    name: 'HeaderWide',
    components: {
        Tag,
        Button,
        Author
    },
    props: {}
}
</script>
