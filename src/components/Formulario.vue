<template>
    <div class="formulario">
        <div class="row mb-3">
            <div class="col-sm-9 mb-3">
                <input type="text" class="form-control" placeholder="Qual tarefa você deseja iniciar?"
                    v-model="descricao" />
            </div>
            <div class="col-sm-3 mb-3">
                <select v-model="idProjeto" class="form-select" aria-label="Default select example">
                    <option value="">Selecione o Projeto</option>
                    <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">{{ projeto.nome }}
                    </option>
                </select>
            </div>
            <div class="col-auto">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import Temporizador from './Temporizador.vue';

export default defineComponent({
    name: 'FormularioTarefaz',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador
    },
    setup(props, { emit }) {
        const store = useStore(key);

        const descricao = ref("");
        const idProjeto = ref("");

        const projetos = computed(() => store.state.projeto.projetos)

        const finalizarTarefa = (tempoDecorrido: number): void => {
            emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: descricao.value,
                projeto: projetos.value.find(proj => proj.id == idProjeto.value)
            })
            descricao.value = ''
        }

        return {
            descricao,
            idProjeto,
            projetos,
            finalizarTarefa
        }
    }
});
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primaria);
}
</style>