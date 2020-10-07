<template>
    <nav id="header" class="hidden lg:block w-full bg-white border-b border-gray-300">
        <div class="container mx-auto w-full flex-grow hidden lg:block pt-1 pb-2" id="nav-content">
            <ul class="w-full flex list-reset justify-center justify-between items-center">
                <li v-for="menuItem in subnavMenu" :key="menuItem.title" class="py-2 lg:py-0">
                    <a class="font-display inline-block text-gray-800 no-underline hover:text-gray-900 hover:underline text-sm py-2 py-21" :href="menuItem.url">{{menuItem.title}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SubNav',
    props: {
        subnavMenu: Array
    },
}
</script>
