function Queue() {
   this.elements = [];
}

Queue.prototype.enqueue = function (e) {
   this.elements.push(e);
};

Queue.prototype.dequeue = function () {
    return this.elements.shift();
};

Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};

Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = function() {
    return this.elements.length;
}

function myFunction() {
  
 let q = new Queue();
 
 alert(q.peek());
 
 for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
 }
 
 alert(q.peek()); // 1
 
 alert(q.length()); // 7
 
 while (!q.isEmpty()) {
    alert(q.dequeue());
 }
  
}