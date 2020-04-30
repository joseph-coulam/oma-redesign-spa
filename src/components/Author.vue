<template>
    <div class="w-full">
        <div class="flex flex-column mt-10">
            <img class="h-16 w-16 rounded-full mr-4" :src="authorImage" :alt="authorName" />
            <div class="flex flex-col justify-center bg-white">
                <div>
                    <p class="text-gray-800"><span class="font-bold">{{authorName}}</span> | Mortgage Advisor</p>
                    <p class="text-sm text-gray-500">Posted: {{new Date(timestamp).toLocaleString()}}</p>
                </div>
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
