$(document).ready(function() {
  $("form").submit(function(event) {
    console.log("form submitted");
    var petName = $("input#petName").val();
    var activeLevel = $("#activeLevel").val();
    var dangerLevel = $("input:radio[name=dangerLevel]:checked").val();
    event.preventDefault();
    console.log(activeLevel);
    $(".petName").text(petName);

    if (petName) {
      $(".formInput").hide();
      if (activeLevel === "low" && dangerLevel === "low") { //turtle
        $(".turtle").show();
      }
      else if (activeLevel === "low" && dangerLevel === "high"){
        $(".crocodile").show();
      }
      else if (activeLevel === "high" && dangerLevel === "low"){
        $(".dog").show();
      }
      else if (activeLevel === "high" && dangerLevel === "high"){
        $(".cheetah").show();
      }
    }//petName exists
    else {
      console.log("no pet name")
      $(".form-group.petName").addClass("has-error");
    } //petName doesn't exist
  }); //end submit function

});
