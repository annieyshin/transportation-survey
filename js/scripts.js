$(function() {
  $("form#transportation_survey").submit(function(event) {
    event.preventDefault();
    $('#duck').show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var worktransport = $(this).val();
      $('#duck').append(worktransport + "<br>");
    });
      $('#settwo').show();
  });


});
