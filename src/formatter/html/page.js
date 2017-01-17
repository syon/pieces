$(function() {
  $(document).on('click', '#format', function(){
    var inText = $('#src').val();
    var outText = html_beautify(inText);
    $('#dest').text(outText);
  });
});
