$(document).on("mouseover", function (ev) {

  var mouseX = ev.originalEvent.pageX;
  var mouseY = ev.originalEvent.pageY;

  $("img").each(function () {
    var imgX = $(this).position().left + 70;
    var imgY = $(this).position().top + 70;

    var diffX = mouseX - imgX;
    var diffY = mouseY - imgY;

    var radians = Math.atan2(diffX, diffY);
    var angle = radians * 180/Math.PI;
    $(this).css("transform", "rotate(" + angle + "deg)");
  })
})
