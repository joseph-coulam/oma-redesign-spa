<template>
    <button class="btn" :class="[`btn--${varient}`, `btn--${size}`]">
            <slot>Button</slot>
        </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        size: {
          type: String,
          default: 'medium'
        },
        varient: {
            type: String,
            default: 'primary'
        },
        onClick: {
            type: Function,
        }
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive
            }
        }
    }
}
</script>


<style scoped lang="postcss">
.btn {
    @apply font-semibold text-sm py-2 px-6 rounded-full;
}

.btn--large{
    @apply font-semibold text-base py-3 px-10 rounded-full;
}

.btn--primary {
    @apply bg-green-500 text-white;
}

.btn--primary:hover {
    @apply bg-green-700;
}

.btn--secondary {
    @apply bg-blue-500 text-white;
}

.btn--secondary:hover {
    @apply bg-blue-700;
}

.btn--success {
    @apply bg-green-600;
}
</style>