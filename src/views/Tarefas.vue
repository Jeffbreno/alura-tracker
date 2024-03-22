<template>
    <section class="tarefas">
        <h4>Criar nova tarefa</h4>
        <Formulario @aoSalvarTarefa="salvarTarefa" />
        <div class="row mb-3">
            <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
            <Box v-if="listaEstaVazia">
                <strong>Você não está muito produtivo hoje! </strong>
                <span style="font-size: 24px;" class="pe-none me-2">
                    <i class="fa-solid fa-face-frown"></i>
                </span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </Box>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import ITarefa from '@/interfaces/ITarefa';
import Box from '@/components/Box.vue';

export default defineComponent({
    name: 'App',
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data() {
        return {
            tarefas: [] as ITarefa[]
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa): void {
            this.tarefas.push(tarefa)
        }
    }
});
</script>

<style scoped>
.tarefas {
    padding: 1.25rem;
}
</style>
