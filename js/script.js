// The user can add a new item to a list of items:

//Listen to the click on button
$("#button").on("click", function () {
  let inputValue = $("#input").val();
  let listItem = $(
    `<li class="item">${inputValue} <button class="crossOutButton">X</button></li>`
  );

  //Add the value to the page list
  $("#list").append(listItem);

  // //Add current input to a toDoList
  // toDolist.push(inputValue);

  //Clean the input space for the next input to be written
  $("#input").val("");

  // The user can cross out an item from the list of items:
  listItem.on("click", function (event) {
    listItem.addClass("strike");
  });

  // The user can delete an item from the list of items:
  listItem.find(".crossOutButton").on("click", function () {
    listItem.addClass("delete");
  });

  // The user can change the order of items in the list of items
  $("#list").sortable();
});
