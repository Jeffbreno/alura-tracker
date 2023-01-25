<template>
    <div class="row">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'BoxVue',
    // data(){
    //     return {
    //         estilos: {
    //             backgroundColor: '#FAF0CA'
    //         }
    //     }
    // }
});
</script>