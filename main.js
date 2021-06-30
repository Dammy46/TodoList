$(document).ready(function () {
  $("#myInput").change(function () {
    var getInput = $(this).val();
    $("ul").append('<li>' + getInput + '<i class="fas fa-check"></i> <i class="far fa-trash-alt"></i> </li>');
    $(this).val("");
  });

  $("ul").on("click", ".fa-trash-alt", function () {
    $(this).parent("li").fadeOut(200)
  });
  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked")
  });
});


















































// var toDoList = []
// class Todo_class {
//   constructor(item) {
//     this.ulElement = item
//   }
//   add() {
//     var todoInput = document.querySelector("#myInput").value;
//     if (todoInput === "") {
//       alert("you've not enter any item")
//     } else {
//       var todoObject = {
//         id: toDoList.length,
//         todoText: todoInput,
//         isDone: false
//       }
//     }
//     toDoList.unshift(todoObject);
//     this.display()
//     document.querySelector("#myInput").value = "";

//   }
//   done_undone(x) {

//   }

//   deleteElement(z) {

//   }
//   display() {

//   }
// }
// var listSelection = document.querySelector("#myUL");
// var mytodoList = new Todo_class(listSelection);

// document.querySelector(".Addbtn").addEventListener("click", function () {
//   mytodoList.add()
// });