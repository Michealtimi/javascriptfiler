    class Stack{
            selector(){
                this.items=[]
                this.count= 0
            }

            //Adding element to the Top of Stack

            push(element){
                this.items[this.count] = element
                console.log(`${element} added to ${this.count}`)
                this.count++
                return this.count -1
            }  

            //retrun and remove the top element in stack
            // Return undefined if stack is empty 

            pop(element){
                   if(this.count == 0) return undefined
                   let deletItem= this.items[this.count - 1]
                   this.count --
                   console.log(`${deletItem} removed`)
                   return deletItem
            }
        }
     
        const stack = new Stack();
        
    stack.push(100)
    stack.push(200)
    stack.push(300)

    stack.pop()
    
