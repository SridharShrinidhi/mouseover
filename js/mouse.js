$(document).on("mousemove", function (ev) {

  var mouseX = ev.originalEvent.pageX;
  var mouseY = ev.originalEvent.pageY;

  $("img").each(function () {
    console.log("calculating..");
    var imgX = $(this).position().left + 200;
    var imgY = $(this).position().top + 200;

    var diffX = mouseX - imgX;
    var diffY = mouseY - imgY;

    var radians = Math.atan2(diffX, diffY);
    var angle = radians * 180/Math.PI;
    $(this).css("transform", "rotate(" + angle + "deg)");
  })
});
//
// var count = 0;
// var images = ["images/brown-eye.svg", "images/green-eye.svg", "images/pink-eye.svg"];
//
// setInterval(function () {
//   count = count + 1;
//   count = count % images.length;
//   var image = images[count];
//   $("img").attr("src", image);
//
// }, 2000);
