<template>
    <div class="formulario">
        <div class="row mb-3">
            <div class="col-sm-9 mb-3">
                <input type="text" class="form-control" placeholder="Qual tarefa você deseja iniciar?"
                    v-model="descricao" />
            </div>
            <div class="col-auto">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'FormularioTarefaz',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador
    },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    }
});
</script>

<style scoped>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primaria);
}

/* 
.inputTarefa{
    width: 54em;
} */
</style>