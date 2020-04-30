<template>
    <div class="w-full h-full">
        <div class="mb-8">
        <Recommended />
        </div>
        <div class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:5em;" id="menu-content">
        <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Page Navigation</p>
            <StickyNav />
        </div>
    </div>
</template>

<script>
import Recommended from './Recommended'
import StickyNav from './StickyNav'
export default {
    name: 'Sidebar',
    components: {
        Recommended,
        StickyNav
    },
    props: {}
}

</script>
