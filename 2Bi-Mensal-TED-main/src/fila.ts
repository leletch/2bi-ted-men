//criando a fila
export function create(size = 10) {
    return [...new Array(size)];
}

//inserindo valor na fila
export function enqueue(queue: any[], value: any) {
    const emptyIndex = queue.indexOf(undefined);
    if (emptyIndex === -1) {
      console.log("Fila cheia");
      return queue;
    }
  
    queue[emptyIndex] = value;
    return queue;
}

//Removendo da fila
export function dequeue(queue: any[]) {
    if (queue[0] === undefined) {
      console.log("Fila vazia");
      return queue;
    }
  
    const firstValue = queue[0];
  
    for (let i = 0; i < queue.length - 1; i++) {
      queue[i] = queue[i + 1];
    }
    
    queue[queue.length - 1] = undefined;

  
    return firstValue;
}
  
//Retorna ao primeiro valor da fila
export function peek(queue: any[]) {
    return queue[0];
}

//Retorna um boolean que indica quando a fila ta vazia
export function isEmpty(queue: any[]) {
    return queue[0] === undefined;
}

//Retorna um boolean quando a fila estiver cheia
export function isFull(queue: any[]) {
    return queue[queue.length - 1] !== undefined;
}

//Limpa a fila
export function clear(queue: any[]) {
    return create();
}

//Retorna o tamanho da fila evitando os espaços vazios 
export function size(queue: any[]) {
    return queue.filter((value) => value !== undefined).length;
}