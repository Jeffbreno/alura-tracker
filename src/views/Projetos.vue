<template>
    <section class="projetos">
        <h4>Criar novo Projeto</h4>
        <form class="row g-3" @submit.prevent="salvar" novalidate>
            <div class="col-6">
                <input type="text" class="form-control" v-model="nomeDoProjeto" id="nomeDoProjeto"
                    placeholder="Nome do Projeto" required />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Salvar</button>
            </div>
        </form>
        <div class="col-8">
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
import { defineComponent } from 'vue';
import IProjeto from '../interfaces/IProjeto';


export default defineComponent({
    name: 'ProjetosVue',
    data() {
        return {
            nomeDoProjeto: '',
            projetos: [] as IProjeto[]
        }
    },
    methods: {
        salvar() {
            const projeto: IProjeto = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = ''
        }
    }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>