<template>
    <form @submit.prevent="submitForm">
        <table>
            <thead>
                <th></th>
                <th>Exercício</th>
                <th>Sets</th>
                <th>Reps</th>
                <th>Intervalo</th>
                <th>Observações</th>
                <th>Imagem</th>
                <th>Deletar?</th>
            </thead>
            <tbody>



                <tr v-for="(item, index) in items" :key="index">

                    <input type="hidden" :value.v-model="item.id = index + 1" readonly>{{ item.id }}
                    <input type="hidden"
                        :value.v-model="item.num = 'Exercício ' + (index < 9 ? '' + (index + 1) : (index + 1))">
                    <td>
                        <input type="text" v-model="item.nome" id="inputField">
                        <ul id="dropdownList" class="list-susp"></ul>
                    </td>
                    <td><input type="number" v-model="item.sets"></td>
                    <td> <input type="text" v-model="item.reps"></td>
                    <td> <input type="text" v-model="item.rest"></td>
                    <td><textarea id="story" name="story" rows="2" cols="20" v-model="item.obs"></textarea></td>
                    <td><input type="text" v-model="item.photo"></td>
                    <input type="hidden" :value="item.img = `https://m.leandrocesar.com/exe/${item.photo}.gif`"
                        readonly>
                    <button v-if="index > 0" @click="moveItemUp(index)">Subir</button>
                    <button v-if="index < items.length - 1" @click="moveItemDown(index)">Descer</button>
                    <button class="add-client" type="button" @click="deleteItem(index)">X</button>
                </tr>
                <!-- <tr v-for="(item, index) in items" :key="index">
                
                <input type="hidden" :value.v-model="item.id = index + 1" readonly>{{ item.id }}
                <input type="hidden" :value.v-model="item.num = 'Exercício ' + (index < 9 ? '' + (index + 1) : (index + 1))">
                <td>
                    <select v-model="item.nome">
                        <option v-for="option in exe" :key="option.value" :value="option.exercicio">{{ option.exercicio }}</option>
                    </select>
                </td>
                <td><input type="number" v-model="item.sets"></td>
                <td> <input type="text" v-model="item.reps"></td>
                <td> <input type="text" v-model="item.reps"></td>
                <td> <input type="number" id="quantity" name="quantity" v-model="item.rest" min="0" max="120" step="5"></td>
            <td><textarea id="story" name="story" rows="2" cols="30" v-model="item.obs"></textarea></td>
            <input type="hidden" :value="item.img = `https://m.leandrocesar.com/exe/${item.nome.toLowerCase().replace(/\s+/g, '')}.gif`"
                readonly>
                
                
                <button class="add-client" type="button" @click="deleteItem(index)">X</button>
            </tr> -->
            </tbody>
        </table>
        <div class="buttons">

            <button class="add-client" type="button" @keyup.enter="addItem" @click="addItem">Add Item</button>
            <br>
            <br>
            <button class="input" @click="submitForm()">Submit</button>

        </div>

    </form>

    <button class="input" type="button" @keyup.delete="clear" @click="clear">Resetar</button>

</template>


    <script>
    export default {
        mounted() {
            const inputField = document.getElementById('inputField');
            const dropdownList = document.getElementById('dropdownList');

            // Simular dados do banco de dados (substitua com seus próprios dados)
            const databaseData = ['Extensora', 'Puxada p/ frente', 'Desenvolvimento de ombros (AP)',
                'Supino maquina',];
            // const databaseData = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grape', 'Strawberry'];

            // Função para filtrar e exibir os itens da lista suspensa
            function filterDropdownList() {
                const searchText = inputField.value.toLowerCase(); // Texto digitado no campo de entrada, em minúsculas
                const filteredData = databaseData.filter(item => item.toLowerCase().includes(searchText)); // Filtrar os dados com base no texto digitado
                dropdownList.innerHTML = ''; // Limpar a lista suspensa
                filteredData.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    dropdownList.appendChild(li);
                });
                if (searchText) {
                    dropdownList.style.display = 'block'; // Exibir a lista suspensa se houver texto digitado
                } else {
                    dropdownList.style.display = 'none'; // Esconder a lista suspensa se não houver texto digitado
                }
            }

            // Evento de digitação no campo de entrada
            inputField.addEventListener('input', filterDropdownList);

            // Evento de clique em um item da lista suspensa
            dropdownList.addEventListener('click', function (e) {
                if (e.target.tagName === 'LI') {
                    inputField.value = e.target.textContent; // Adicionar texto ao campo de entrada
                    dropdownList.style.display = 'none'; // Esconder a lista suspensa
                }
            });

            // Evento de clique fora do campo de entrada
            document.addEventListener('click', function (e) {
                if (!e.target.matches('#inputField') && !e.target.matches('#dropdownList')) {
                    dropdownList.style.display = 'none'; // Esconder a lista suspensa
                }
            });
        }
    }
    </script>


<script setup>
import { ref } from 'vue';

const exe = ref([
    { exercicio: 'Extensora' },
    { exercicio: 'Puxada p/ frente' },
    { exercicio: 'Remada na polia baixa' },
    { exercicio: 'Desenvolvimento de ombros (AP)' },
    { exercicio: 'Supino maquina' },
    { exercicio: 'Tríceps mergulho no graviton' },
    { exercicio: 'Remada no aparelho' },
    { exercicio: 'Rabdominal Infra' },
    { exercicio: 'abdominal Infra na Paralela' },
    { exercicio: 'Abdominal Máquina' },
    { exercicio: 'Abdominal Oblíquo no solo' },
    { exercicio: 'Abdominal Remador completo' },
    { exercicio: 'Abdominal supra' },
    { exercicio: 'Abdução de quadril na polia baixa' },
    { exercicio: 'Cadeira Abdutora' },
    { exercicio: 'Cadeira adutora' },
    { exercicio: 'Agachament Lunge' },
    { exercicio: 'Desenvolvimemto Arnold' },
    { exercicio: 'Back Squat' },
    { exercicio: 'Bíceps Aparelho' },
    { exercicio: 'Bíceps em pé(HBM)' },
    { exercicio: 'Bíceps Invertido (HBW)' },
    { exercicio: 'Bíceps Martelo' },
    { exercicio: 'Bíceps Sentado' },
    { exercicio: 'Agachamento Búlgaro' },
    { exercicio: 'Extensão de tronco (Cadeira Romana)' },
    { exercicio: 'Crucifixo Inverso (Ap)' },
    { exercicio: 'Crucifixo Inverso (HBC)' },
    { exercicio: 'Crucifixo Peitoral Reto (HBC)' },
    { exercicio: 'Desenvolvimento de Ombros (HBC)' },
    { exercicio: 'Desenvolvimento de Ombros (AP)' },
    { exercicio: 'Desenvolvimento de Ombros (alternando)' },
    { exercicio: 'Duck Walk' },
    { exercicio: 'Dumbbel Lunge' },
    { exercicio: 'Flexão de Ombros (HBC)' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
    { exercicio: '' },
])



const items = ref([
    { id: '', num: '', nome: '', sets: '', reps: '', rest: '', grupo: '', obs: '', photo: '', img: 'https://m.leandrocesar.com/exe/${item.photo}.gif`' }

]);

function addItem() {
    items.value.push({ id: '', num: '', nome: '', sets: '', reps: '', rest: '', grupo: '', obs: '', photo: '', img: '' });
}


function deleteItem(index) {
    items.value.splice(index, 1);
}

function clear() {
    items.value = ([
        { id: '', num: '', nome: '', sets: '', reps: '', rest: '', grupo: '', obs: '', photo: '', img: `` }

    ])
}



async function submitForm() {
    try {
        const response = await fetch('http://191.101.70.209:4000/fs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items.value),
        });
        localStorage.setItem('item', JSON.stringify(items.value));

        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}
onMounted(() => {
    const storedItems = JSON.parse(localStorage.getItem('item'));
    if (storedItems) {
        items.value = storedItems;
    }
});



onUpdated(() => {
    localStorage.setItem('item', JSON.stringify(items.value));
})

function moveItemUp(index) {
    if (index <= 0) return;
    const item = items.value[index];
    items.value.splice(index, 1);
    items.value.splice(index - 1, 0, item);
}

function moveItemDown(index) {
    if (index >= items.value.length - 1) return;
    const item = items.value[index];
    items.value.splice(index, 1);
    items.value.splice(index + 1, 0, item);
}


</script>


<style scoped>
.main-client {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.list-susp {
    display: none;
    overflow-y: hidden;
    max-height: 200px;
    font-size: 1rem;
    list-style-type: none;
    list-style-position: initial;
    margin-left: -35px;
    padding-bottom: 3px;
    margin-right: -30px;
    color: #444;
    cursor: pointer;
}




.buttons {
    position: absolute;
    right: 10px;
}

.users {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    margin-bottom: 1rem;
}

.users-full {
    width: 62%;
    z-index: 1;
    background-color: #34d39990;
    padding: 10px;
    border-radius: 8px;
    border: solid 3px #34d399;
    color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.users-details {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    width: 36%;
    z-index: 1;
    margin-left: -10px;
    height: 100%;
}

.users-details-box {
    border: solid 3px #34d39990;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    width: 185px;
    background-color: #34d39950;
    height: 185px;
    border-radius: 100%;
    text-align: center;
}

.users-details-box:nth-child(1) {
    border: solid 3px #34d39990;
    background-color: #34d39990;
}

.users-details-box:nth-child(2) {
    border: solid 3px #34d39990;
    background-color: #34d39920;
}

textarea#story {
    background-color: var(--vt-c-white-soft);
}


.form-cliente {
    border-radius: 50%;
    border: solid 3px #34d399;
}

.cliente {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: solid 3px #34d399;
    color: #34d399;
}


.file-cliente {
    margin-top: -20px;
    margin-left: 20px;
    zoom: .8;
}



.close {
    position: relative;
    top: -1px;
    right: -6px;
    margin-top: -px;
    zoom: 1.6;
}

.add {
    position: relative;
    top: -40px;
}

.length-full {
    color: #fff;
}

.users-full h1 {
    font-size: 3rem;
    margin-bottom: -1rem;
}

.users-full-status {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #34d399;
}

.button {
    height: 35px;
    width: 55px;
    text-align: center;
    padding-top: 4px;
    border: solid 2px #fff;
    border-radius: 8px;
    background-color: #34d39950;
    cursor: pointer;
}

.green {
    color: #00ff00;
}

.red {
    color: #cf0000;
}

.users-full-status h1 {
    font-size: 1.3rem;
}

.users-full-status h2 {
    font-size: 1.2rem;
}


.center {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.center-start {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 5px;
    margin-bottom: 4rem;
}

.center-start div a {

    margin: 0 20px;
}

.others {
    z-index: 1;
}

.table-clients {
    width: 100%;
    z-index: 1;
}

.others-full {
    z-index: 1;
    background-color: #34d39950;
}

.others-details {
    margin: 0 .5%;
    z-index: 1;
    background-color: #34d39930;
    border: solid 3px #34d39940;
    border-radius: 8px;
}

.list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: auto;
    width: 100%;
    height: 100%;
}

li {
    list-style: none;
}

table {
    width: 99%;
    border-collapse: collapse;
    margin: 0% .5%;
    border: none;
    text-align: center;
}

th,
td {
    border-radius: 6px;
    text-align: left;
    padding: 8px;
    border: none;
}

tr:nth-child(2n -1) {
    background-color: #34d39930;
    border-radius: 6px;
}

th {
    position: sticky;
    top: 0px;
    background-color: #34d399;
    color: #fff;
    font-weight: 800;
}

.head-logo {
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--color-background);
    height: 46px;
    width: 46px;
    color: #718096;
    box-shadow: 0px 7px 20px #34d399;
    border-radius: 8px;
    margin: 1rem;
    z-index: 10;
}

.logo img {
    height: 46px;
    width: 46px;
    border-radius: 8px;
    border: #34d399 2px solid;
    z-index: 100;
    opacity: 1;
}

.head-name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'gagalin';
}

.name {
    font-size: 1.6rem;
    margin-left: .1rem;
    color: #34d399;
    font-family: 'gagalin';
    font-size: 2rem;
    letter-spacing: 0px;
}

.sections {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: 'gagalin';
    margin: 1rem 0rem 0rem 0;
    width: 100%;
}

.sections a {
    transition: all .4s linear;
    font-size: 1.2rem;
    margin-left: .1rem;
    color: #34d39999;
    font-family: 'gagalin';
    letter-spacing: 0px;
    margin: 0rem 0rem 0rem 0rem;
    width: 100%;
    padding: 12px;
    color: #34d39970;
    background-color: #34d39960;
    border-bottom: solid 2px #fff;
    cursor: pointer;
}

.sections a .icon {
    margin: 0rem 0rem 0rem 1rem;

}

.sections a:hover {
    color: #34d399;
    border-bottom: solid 2px #34d399;
}

.sections .activerr {
    padding: 12px;
    color: #fff;
    background-color: #34d399;
    border-bottom: solid 2px #34d399;
}

.sections .activerr:hover {
    padding: 12px;
    color: #fff;
    background-color: #34d399;
    border-bottom: solid 2px #34d399;
}

main {
    display: flexbox;
    left: 4px;
}

.whats {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    background-color: #edf2f7;
    height: 40px;
    width: 40px;
    color: #718096;
    box-shadow: 1px 1px 15px #34d39950;
    transition: all 0.2s ease-in-out 0s;
    bottom: 3.5rem;
    right: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 100;
}

.whats:hover {
    background-color: #34d39910;
    color: #34d39980;
    box-shadow: 1px 1px 15px #34d39980;
    z-index: 100;
}

.inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

.inputs div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
}


.add-client {
    margin: .5rem auto;
    transition: all .4s linear;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39910;
    border-radius: 8px;
    text-align: left;
    color: #718096;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all .2s linear;
    height: 28px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 4px;
    padding-bottom: 4px;

}

.input {
    margin: .5rem auto;
    transition: all .4s linear;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39910;
    border-radius: 8px;
    text-align: left;
    color: #718096;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all .2s linear;
    height: 28px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 4px;
    padding-bottom: 4px;

}

.input:hover {
    background-color: #34d39910;
}

input {
    margin: .5rem auto;
    transition: all .4s linear;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39910;
    border-radius: 8px;
    text-align: left;
    color: #718096;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all .4s linear;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
}

input::placeholder {
    color: #71809690;
    background-color: #34d39910;
}

.inputs div h4 {
    text-align: left;
}

input:focus {
    background-color: #34d39910;
    border-color: #34d39980;
    color: #718096;
}

input:focus-visible {
    background-color: #34d39910;
    border: solid 1px #34d399;
    color: #718096;
}

input:active {
    background-color: #34d39910;
    border-color: #34d39980;
    color: #718096;
}



input:hover {
    background-color: #34d39910;
}

h4 {
    color: #718096;
    transition: all .3s linear;
    margin: 0 0 0 10px;
    text-align: left;
}

h4:nth-child(1) {
    color: #718096;
    transition: all .3s linear;
    margin: 20px 0 0 10px;
}


.login {
    transition: all .4s linear;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39910;
    border-radius: 8px;
    cursor: pointer;
    width: 160px;
    text-align: center;
    color: #718096;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 7px;
    padding-bottom: 8px;
    margin: 1rem 1.5rem;
}

.login .icon {
    margin: -2px 0px 2px 4px;
    transition: transform .3s linear;
}

.login:hover {
    cursor: pointer;
    background-color: #34d39910;
    color: #34d39980;

    padding-inline: 16px;
    padding-top: 7px;
    padding-bottom: 8px;
    margin: 1rem 1.5rem;
}

.login:hover .icon {
    margin: -2px 0px 2px 4px;
    transform: translateX(6px);
}

.pop-up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 20px 20px;
    background-color: #34d399;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    position: fixed;
    bottom: 10px;
    width: 80%;
    left: 50%;
    margin-left: -40%;
    font-weight: 900;
    border: solid 1px #34d39910;
    z-index: 10000;
}

.pop-up p {
    font-weight: 700;
    font-weight: 900;
    font-size: 13px;
}

.button-pop {
    margin: 7px auto 0 auto;
    transition: all .4s linear;
    border: solid 1px #34d399;
    box-shadow: 0 0px 5px #34d39910;
    border-radius: 8px;
    cursor: pointer;
    width: 50%;
    text-align: center;
    background-color: #34d399;
    color: #fff;
    border: solid 1px #fff;
}

.button-pop:hover {
    background-color: #fff;
    border: solid 1px #34d39910;
    color: #34d399;
}
</style>