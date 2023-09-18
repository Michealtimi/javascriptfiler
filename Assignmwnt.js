class Stack{
    constructor(){
        this.items= []
    }    
    
    push(element){
        this.item.push(element);
    }

    pop(element){
        this.items.pop()
        let base = this.items.pop();
        console.log(`${base} removed`)
    }

    peek(element){
        let bro = this.items[this.items.length - 1];
    }
}

let myStack = Stack();

myStack.push(100)
myStack.push(300)
myStack.push(500)

