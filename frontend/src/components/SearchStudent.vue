<template>
    <div>
        <p class="panel-heading">Consulta de alunos</p>
        <div class="level">
            <div class="form level-item">
                <div class="field has-addons">
                    <input class="input" v-model="studentsName" type="text" placeholder="Digite o nome completo do estudante">
                    <button class="button is-info" @click="$emit('searchStudent', studentsName)">Pesquisar</button>
                    <button class="btn-add" @click="$emit('createStudent')">Cadastrar Aluno</button>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'SearchStudent',
    data() {
        return {
            studentsName:''
        }
    },
    emits: ['createStudent', 'searchStudent']
}

</script>

<style scoped>
.panel-heading {
    border: 2px solid black;
}

.input {
    width: 500px;
}

.form {
    padding: 15px;
    border: 2px solid black;
    height: 150px;
}

.is-info {
    font-weight: bold;
}

.btn-add {
    margin-left: 20px;
}

.level {
    width: 100%;
}
</style>