"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filaAlunos = void 0;
const fila = __importStar(require("./fila"));
// declarando o objeto "alunos"
const alunos = [
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
const fileiras = [
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
];
function filaAlunos(alunos, fileiras) {
    fileiras.forEach((fileiras) => {
        for (let i = 0; i < fileiras.numeroTotal; ++i) {
            if (alunos[0] !== undefined) {
                fileiras.alunos[i] = alunos[0];
                fila.dequeue(alunos);
            }
        }
    });
    console.log("As suas fileiras ficaram assim:");
    console.log(fileiras);
}
exports.filaAlunos = filaAlunos;
filaAlunos(alunos, fileiras);
//Remove students from the rows
function dequeueAlunos(fileiras) {
    fileiras.forEach((fileiras) => {
        console.log(`Fileira ${fileiras.numeroCarteira}`);
        for (let i = 0; i < fileiras.numeroTotal; ++i) {
            if (fileiras.alunos[0] !== undefined) {
                console.log(`${fileiras.alunos[0].nome} saiu do lugar ${i + 1}`);
                console.log(`Tchau até amanhã ${fileiras.alunos[0].nome}!`);
                console.log("---------------------------------------------------------");
                fila.dequeue(fileiras.alunos);
            }
        }
    });
}
dequeueAlunos(fileiras);
console.log(fileiras);