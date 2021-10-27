function blankField(text) {
  if (text === "") {

  }
}


$(document).ready(function() {
  $("#grocery-form").submit(function(event) {
    event.preventDefault();

    const input1 = $("#item1").val();
    const input2 = $("#item2").val();
    const input3 = $("#item3").val();
    const input4 = $("#item4").val();
    const input5 = $("#item5").val();
    const input6 = $("#item6").val();

    let listArray = [input1, input2, input3, input4, input5, input6];

    let orderedArray = listArray.sort();

    orderedArray.forEach(function(element) {
      if (element.trim().length === 0) {
        return null;
      } $("ul").append("<li>" + element + "</li>");
    });
  });
});

