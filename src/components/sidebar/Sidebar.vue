<template>
    <div class="w-full h-full">
        <div class="mb-8">
        <Recommended :recommended="recommended" :display="2" />
        </div>
        <div class="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:5em;" id="menu-content">
            <StickyNav :anchorLinks="anchorLinks" />
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
        StickyNav,
    },
    props: {
        anchorLinks: Array,
        recommended: Object
    }
}

</script>
