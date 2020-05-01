<template>
    <div class="w-full bg-white p-8" id="menu-content">
        <p class="py-2 mb-2 font-bold tracking-wider uppercase text-sm">In this article</p>
        <ul class="list-reset border-t border-gray-300">
            <li v-for="links in anchorLinks" :key="links.id" class="py-0">
                <a :href="`#${links.id}`" class="">
                    <p class="text-sm text-gray-800 leading-snug my-4">
                        {{links.innerText}}
                    </p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'StickyNav',
    props: {
        anchorLinks: Array
    }
}
</script>
