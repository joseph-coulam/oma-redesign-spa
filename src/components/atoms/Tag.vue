<template>
    <div class="tag" :class="[`tag--${type}`]">
            <slot>Tag</slot>
        </div>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        type: {
            type: String,
            default: "1"
        },
        onClick: {
            type: Function,
        }
    }
}
</script>

<style scoped lang="postcss">

.tag {
    @apply inline-block bg-transparent font-semibold py-2 px-4 text-xs border rounded;
}

.tag--1 {
    @apply border-red-500 text-red-500;
}

.tag--2 {
    @apply bg-green-500 text-green-500;
}

.tag--3 {
    @apply bg-purple-500 text-purple-500;
}

.tag--4 {
    @apply bg-orange-500 text-orange-500;
}

.tag--5 {
    @apply bg-blue-500 text-blue-500;
}

.tag--6 {
    @apply bg-yellow-500 text-yellow-500;
}

</style>