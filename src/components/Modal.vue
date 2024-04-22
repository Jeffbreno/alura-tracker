<template>
    <div class="modal fade" id="ModalTarefa" tabindex="-1" aria-labelledby="ModalTarefa" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="cabecalho" />
                </div>
                <div class="modal-body">
                    <slot name="conteudo" />
                </div>
                <div class="modal-footer">
                    <slot name="rodape" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalVue',
})


</script>