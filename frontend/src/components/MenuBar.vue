<template>
    <div class="message">
<div class="message-header">
        <p> Módulo Acadêmico </p>
    </div>
    <div class="message-body">
        <a :href="url"> Alunos </a>
    </div>
    </div>
    
    
</template>

<script>
export default {
    name: 'MenuBar',
    data() {
        return {
            url: process.env.VUE_APP_URL,
        }
    }
}
</script>

<style scroped>

.message-body {
    color: black;
    height: 800px;
    padding: 8px;
}

.message-header {
    justify-content: center;
}


</style>