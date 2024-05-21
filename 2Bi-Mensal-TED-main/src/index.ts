// importando os arquivos
import { Aluno, Fileira,} from './types';
import * as fila from './fila';


// declarando o objeto "alunos"
const alunos: Aluno[] = [
    { 
        nome: "João" 
    },
    { 
        nome: "Felipe"
    },
    { 
        nome: "Maria" 
    },
    { 
        nome: "José" 
    },
    { 
        nome: "Ana" 
    },
    { 
        nome: "Carlos" 
    },
    { 
        nome: "Pedro" 
    },
    { 
        nome: "Paulo" 
    },
    { 
        nome: "Lucas" 
    },
    { 
        nome: "Mariana" 
    },
    { 
        nome: "Juliana" 
    },
    { 
        nome: "Fernanda" 
    },
    { 
        nome: "Rafael" 
    },
    { 
        nome: "Ricardo"
    },
    { 
        nome: "Jorge" 
    },
    { 
        nome: "Miguel" 
    }
];

//declarando o objeto "fileiras"
const fileiras: Fileira[] = [
    {
        numeroCarteira: 1, //numero do lugar ex:1,2,3,4,5
        numeroTotal: 5, //quantidade de carteiras
        alunos: fila.create(5) 
    },
    {
        numeroCarteira: 2,
        numeroTotal: 5,
        alunos: fila.create(5)
    },
    {
        numeroCarteira: 3,
        numeroTotal: 5,
        alunos: fila.create(5)
    },
    {
        numeroCarteira: 4,
        numeroTotal: 5,
        alunos: fila.create(5)
    },
    {
        numeroCarteira: 5,
        numeroTotal: 5,
        alunos: fila.create(5)
    },
]


export function filaAlunos(alunos:Aluno[], fileiras:Fileira[]){
    fileiras.forEach((fileiras) =>{ //percorrer as fileiras 
        for(let i = 0; i < fileiras.numeroTotal; ++i){
            if(alunos[0] !== undefined){
                fileiras.alunos[i] = alunos[0];
                fila.dequeue(alunos);
            }
        }
    })
    console.log("As suas fileiras ficaram assim:");
    console.log(fileiras);
}

//Remove os alunos das fileiras
function dequeueAlunos(fileiras: Fileira[]){
    fileiras.forEach((fileiras) =>{
        console.log(`Fileira ${fileiras.numeroCarteira}`);
        
        for(let i = 0; i < fileiras.numeroTotal; ++i){
            if(fileiras.alunos[0] !== undefined){
                console.log(`${fileiras.alunos[0].nome} saiu do lugar ${i + 1}`);
                console.log(`Tchau até amanhã ${fileiras.alunos[0].nome}!`);
                console.log("---------------------------------------------------------");
                
                fila.dequeue(fileiras.alunos)
            }
            
        }
    })
}

dequeueAlunos(fileiras)

console.log(fileiras);
