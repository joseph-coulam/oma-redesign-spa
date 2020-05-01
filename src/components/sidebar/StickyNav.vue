<template>
    <div class="w-full inset-0 hidden lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:5em;" id="menu-content">
        <p class="py-2 lg:pb-2 font-bold tracking-wider uppercase text-sm">In this article</p>
        <ul class="list-reset">
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
