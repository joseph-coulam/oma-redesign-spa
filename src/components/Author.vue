<template>
    <div class="w-full flex flex-col xl:flex-row">
        <img class="h-12 w-12 xl:h-16 xl:w-16 rounded-full mx-auto mb-2 xl:ml-0 xl:mr-4" :src="authorImage" :alt="authorName" />
        <div class="flex flex-col justify-center bg-white">
            <div>
                <p class="text-gray-800 font-light"><span class="font-semibold">{{authorName}}</span> | Mortgage Advisor</p>
                <p class="text-sm text-gray-500">Updated: {{new Date(timestamp).toLocaleString()}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Author',
    props: {
        authorName: String,
        authorImage: String,
        timestamp: String
    }
}
</script>
