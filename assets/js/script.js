"use strict";
/*** onLoad ***/
window.onload = function () {
  location.hash = "#portfolio";
};

/*** Projects search function ***/
$(document).ready(function () {
  $("#searchInput").on("input propertychange", function () {
    let value = $(this).val().toLowerCase();
    $("#projects .projectItem").filter(function () {
      /* toggle(true) == display: block ; toggle(false) ==  display: none */
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#searchInput").on("focus", function () {
    $(".form-message").show();
  });
});

$(document).ready(function () {
  $("#searchInput").on("blur", function () {
    $(".form-message").hide();
  });
});
