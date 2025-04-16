<template>
    <div>
        <Preloader v-if="isLoading" />
        <router-view v-slot="{ Component }">
            <transition 
                enter-active-class="animated fadeIn" 
                leave-active-class="animated fadeOut" 
                mode="out-in" 
                :duration="600" 
                @after-leave="$root.$emit('triggerScroll')"
            >
                <component :is="Component" />
            </transition>
    </router-view>
        <GoTop />
    </div>
</template>

<script>
import Preloader from './components/Layouts/Preloader'
import GoTop from './components/Layouts/GoTop'

export default {
    name: 'App',
    components: {
        Preloader,
        GoTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
}
</script>