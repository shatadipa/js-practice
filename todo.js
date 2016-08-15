var ToDo = function(title, description) {
  this.title = title;
  this.description = description;
  this.isDone = false;
};

var ToDoList = function() {
  this.items = [];
};

ToDoList.prototype.addToDo = function(title, description) {
  var todo = new ToDo(title, description);
  this.items.push(todo);
};

ToDoList.prototype.removeToDo = function(title) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].title === title) {
      this.items.splice(i, 1);
      console.log(title + ' deleted successfully!');
      return;
    }
  }
  console.log(title + ' not found!')
};

ToDoList.prototype.markDone = function(title) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].title === title) {
      this.items[i].isDone = true;
      console.log(title + ' marked done!');
      return;
    }
  }
  console.log(title + ' not found!')
};
