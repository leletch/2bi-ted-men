export interface Aluno {
    nome: string,
}

export interface Fileira {
    numeroCarteira: number,
    numeroTotal: number,
    alunos: Aluno[],
}