function blankField(text) {
  if (text === "") {

  }
}


$(document).ready(function() {
  $("#grocery-form").submit(function(event) {
    event.preventDefault();

    const input1 = $("#item1").val().toUpperCase();
    const input2 = $("#item2").val().toUpperCase();
    const input3 = $("#item3").val().toUpperCase();
    const input4 = $("#item4").val().toUpperCase();
    const input5 = $("#item5").val().toUpperCase();
    const input6 = $("#item6").val().toUpperCase();

    let listArray = [input1, input2, input3, input4, input5, input6];

    let orderedArray = listArray.sort();

    orderedArray.forEach(function(element) {
      if (element.trim().length === 0) {
        return null;
      } $("ul").append("<li>" + element + "</li>");
      $(".container").hide();
    });
  });
});

