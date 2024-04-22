<template>
    <section class="tarefas">
        <h4>Criar nova tarefa</h4>
        <Formulario @aoSalvarTarefa="salvarTarefa" />
        <div class="row mb-3">
            <Box v-if="listaEstaVazia">
                <strong>Você não está muito produtivo hoje! </strong>
                <span style="font-size: 24px;" class="pe-none me-2">
                    <i class="fa-solid fa-face-frown"></i>
                </span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </Box>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </span>
                <input type="text" class="form-control" placeholder="Digite para filtrar" v-model="filtro">
            </div>
            <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"
                @aoTarefaClicada="selecionarTarefa" />
        </div>
        <!-- Modal -->
        <div class="modal fade" id="ModalTarefa" tabindex="-1" aria-labelledby="ModalTarefa" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="ModalTarefa">Editando uma Tarefa</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="row mb-3" novalidate>
                            <div class="col-9 col-sm-11">
                                <input type="text" class="form-control" v-if="tarefaSelecionada"
                                    v-model="tarefaSelecionada.descricao" id="descricaoDaTarefa"
                                    placeholder="Descrição da Tarefa" required />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button @click="alterarTarefa" type="button" class="btn btn-primary">Salvar alterações</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import Formulario from '@/components/Formulario.vue';
import Tarefa from '@/components/Tarefa.vue';
import Box from '@/components/Box.vue';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';
import { Modal } from 'bootstrap';


export default defineComponent({
    name: 'App',
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data() {
        return { tarefaSelecionada: null as ITarefa | null, modal: null as Modal | null }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa): void {
            this.store.dispatch(CADASTRAR_TAREFA, tarefa)
        },
        selecionarTarefa(tarefa: ITarefa) {
            this.tarefaSelecionada = tarefa;
            this.abrirModal();

        },
        alterarTarefa() {
            this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada).then(() => this.fecharModal())
        },
        abrirModal() {
            // Verifica se o elemento modal está presente no DOM
            const modalElement = document.getElementById('ModalTarefa');
            if (modalElement) {
                // Inicializa o modal
                this.modal = new Modal(modalElement);
                // Exibe o modal
                this.modal.show();
            } else {
                console.error('Elemento do modal não encontrado no DOM.');
            }
        },
        fecharModal() {
            if (this.modal) {
                this.modal.hide();
            }
        }
    },

    setup() {
        const store = useStore()
        store.dispatch(OBTER_TAREFAS)
        store.dispatch(OBTER_PROJETOS)

        const filtro = ref('')

        // const tarefas = computed(() =>
        //     store.state.tarefa.tarefas.filter(
        //         (t) => !filtro.value || t.descricao.includes(filtro.value)
        //     )
        // );

        watchEffect(() => {
            store.dispatch(OBTER_TAREFAS, filtro.value)
        })

        return {
            tarefas: computed(() => store.state.tarefa.tarefas),
            store,
            filtro
        }
    }
});
</script>

<style scoped>
.tarefas {
    padding: 1.25rem;
}
</style>
