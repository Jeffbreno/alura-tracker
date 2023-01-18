<template>
    <section class="projetos">
        <h1>Projetos</h1>
        <div class="field">
            <form @submit.prevent="salvar">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
            </form>
        </div>

        <div class="field">
            <button type="submit" class="button">Salvar</button>
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
.projetos{
    padding: 1.25rem;
}
</style>