$(function() {
  $(document).on('click', '#format', function(){
    var inText = $('#src').val();
    var outText = css_beautify(inText);
    $('#dest').text(outText);
  });
});
