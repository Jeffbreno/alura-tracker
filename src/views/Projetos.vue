<template>
    <div class="projetos">
        <h4>Projetos</h4>
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjetosVue'
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>