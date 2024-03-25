<template>
    <section class="projetos">
        <h4>Criar novo Projeto</h4>
        <form class="row mb-3" @submit.prevent="salvar" novalidate>
            <div class="col-9 col-sm-11">
                <input type="text" class="form-control" v-model="nomeDoProjeto" id="nomeDoProjeto"
                    placeholder="Nome do Projeto" required />
            </div>
            <div class="col-1">
                <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </form>
        <div class="col-auto fs-6">
            <table class="table table-light table-striped">
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="projeto in projetos" :key="projeto.id">
                        <td>{{ projeto.id }}</td>
                        <td>{{ projeto.nome }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjetosVue',
    data() {
        return {
            nomeDoProjeto: ''
        }
    },
    methods: {
        salvar() {
            this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
            this.nomeDoProjeto = ''
        }
    },
    setup() {
        const store = useStore()
        return { store, projetos: computed(() => store.state.projetos) }
    }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>