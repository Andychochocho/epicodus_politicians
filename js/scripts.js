$(document).ready(function() {
  $("form#politics").submit(function(event) {
    var angry = parseInt($("select#angry").val());
    var happy = parseInt($("select#happiness").val());
    var name = $("input.name").val();

    if((angry === 1) && (happy === 1)) {
      $("#politician1").show();
    }
    if((angry === 1) && (happy === 2)) {
      $("#politician2").show();
    }
    if((angry === 2) && (happy === 1)) {
      $("#politician2").show();
    }
    if((angry === 1) && (happy === 3)) {
      $("#politician2").show();
    }
    if((angry === 3) && (happy === 1)) {
      $("#politician3").show();
    }
    if((angry === 2) && (happy === 2)) {
      $("#politician3").show();
    }
    if((angry === 3) && (happy === 2)) {
      $("#politician3").show();
    }
    if((angry === 2) && (happy === 3)) {
      $("#politician3").show();
    }
    if((angry === 4) && (happy === 1)) {
      $("#politician4").show();
    }
    if((angry === 1) && (happy === 4)) {
      $("#politician4").show();
    }
    if((angry === 3) && (happy === 3)) {
      $("#politician4").show();
    }
    if((angry === 4) && (happy === 2)) {
      $("#politician4").show();
    }
    if((angry === 4) && (happy === 3)) {
      $("#politician4").show();
    }
    if((angry === 4) && (happy === 4)) {
      $("#politician4").show();
    }
    if((angry === 3) && (happy === 4)) {
      $("#politician4").show();
    }

    event.preventDefault();
  });
});
