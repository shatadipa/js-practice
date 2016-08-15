var ToDo = function(title, description){
    this.title = title;
    this.description = description;
    this.isDone = false;
};

var ToDoList = [];

Array.prototype.addToDo = function(title, description){
    var todo = new ToDo(title, description);
    this.push(todo);
};

Array.prototype.removeToDo = function(title){
  for(var i=0;i<this.length;i++){
     if(this[i].title===title){
        this.splice(i,1);
        console.log(title + ' deleted successfully!');
        return;
     }
  }
  console.log(title + ' not found!')
};

Array.prototype.markDone = function(title){
  for(var i=0;i<this.length;i++){
     if(this[i].title===title){
        this[i].isDone = true;
        console.log(title + ' marked done!');
        return;
     }
  }
  console.log(title + ' not found!')
}
