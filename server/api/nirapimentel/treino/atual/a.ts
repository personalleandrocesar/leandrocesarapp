export default defineEventHandler((event) => {
  return [
    // Série Atual
    { num: 'Exercício 1', nome: 'Agachamento Sumô', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/sumo.gif' },
    { num: 'Exercício 2', nome: 'Extensora', sets: 3, reps: '7 c/2" + 7', rest: '50"', grupo: '', obs: 'Fazer 7 repetições segurando 3 segundos a cada repetição e + 7 direto no final.', img: 'https://api.nexwod.app/exe/extensora.gif' },
    { num: 'Exercício 3', nome: 'Flexão de quadril (caneleira)', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/flexaoQuadril.gif' },
    { num: 'Exercício 4', nome: 'Leg press (pés paralelos)', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/legpress.gif' },
    { num: 'Exercício 5', nome: 'Adutora', sets: 4, reps: '20 c/ 2t', rest: '50"', grupo: '', obs: 'fazer 2 tempos de contração a cada repetição.', img: 'https://api.nexwod.app/exe/adutora.gif' },
    { num: 'Exercício 6', nome: 'Hack Machine', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/hacksquat.gif' },
    { num: 'Exercício 7', nome: 'Supino hammer (reto)', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/supinoRetoHammer.png' },
    { num: 'Exercício 8', nome: 'Supino inclinado barra (HBL)', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/supino45HBL.gif' },
    { num: 'Exercício 9', nome: 'Tríceps testa com halteres', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/tricepsTestaHBC.gif' },
    { num: 'Exercício 10', nome: 'Tríceps corda na polia alta', sets: 3, reps: '20 c/ 2t', rest: '50"', grupo: '', obs: 'Fazer com 2 tempos embaixo a cada repetição.', img: 'https://api.nexwod.app/exe/tricepsCorda.gif' },
    { num: 'Exercício 11', nome: 'Abdominal remador completo', sets: 3, reps: '25', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/abdominalRemadorCompleto.png' },


    // { id: 1, num: 'Exercício 1', nome: 'Leg press horizontal', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Fazer com os pés paralelos mais pra cima.', img: 'https://api.nexwod.app/exe/legpress.gif'},
    // { id: 2, num: 'Exercício 2', nome: 'Extensora', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/extensora.gif'},
    // { id: 3, num: 'Exercício 3', nome: 'Mesa flexora', sets: 3, reps: '8 +10"', rest: '50"', grupo: '', obs: 'Fazer 8 repetições e segurar 10 segundos no final.', img: 'https://api.nexwod.app/exe/mesaFlexora.gif'},
    // { id: 4, num: 'Exercício 4', nome: 'Agachamento Sumô', sets: 3, reps: '12', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/sumo.gif'},
    // { id: 5, num: 'Exercício 5', nome: 'Stiff', sets: 3, reps: '15', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/stiffHBL.gif'},
    // { id: 6, num: 'Exercício 6', nome: 'Abdutora', sets: 3, reps: '10 / 15 2t', rest: '50"', grupo: '', obs: 'Fazer 10 repetições, diminuir 1 placa: fazer 15 repetições com 2 tempos.', img: 'https://api.nexwod.app/exe/abdutora.gif'},
    // { id: 7, num: 'Exercício 7', nome: 'Leg press 45°', sets: 3, reps: '12', rest: '50"', grupo: '', obs: 'Colocar os bancos e pés bem mais alto; cuidado com a lombar.', img: 'https://api.nexwod.app/exe/leg45.gif'},
    // { id: 8, num: 'Exercício 8', nome: 'Agachamento aparelho', sets: 3, reps: '10', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/hacksquat.gif'},
    // { id: 9, num: 'Exercício 9', nome: 'Panturrilha aparelho em pé', sets: 3, reps: '20', rest: '50"', grupo: '', obs: 'Fazer 20 repetições + curtas até a falha.', img: 'https://api.nexwod.app/exe/panturrilhaAparelho.gif'},
    // { id: 10, num: 'Exercício 10', nome: 'Abdominal infra no solo', sets: 3, reps: '25', rest: '50"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/abdominalInfra.gif'},

    // Modelo:
    // { num: 'Exercício 1', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 2', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 3', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 4', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 5', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 6', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 7', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 8', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 9', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 10', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},
    // { num: 'Exercício 11', nome: '', sets: 3, reps: '', rest: '40"', grupo: '', obs: '', img: 'https://api.nexwod.app/exe/preImagem.gif'},

  ]
})
