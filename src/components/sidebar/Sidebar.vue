<template>
    <div class="w-full h-full bg-white">
        <div class="mb-8">
        <Recommended :recommended="recommended" :display="2" />
        </div>
        <div class="w-full sticky z-20" style="top:5em;" id="menu-content">
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
        recommended: Array
    }
}

</script>
