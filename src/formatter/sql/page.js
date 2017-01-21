$(function() {
  $(document).on('click', '#format', function(){
    // https://sqlformat.org/api/
    $.ajax({
      url: "https://sqlformat.org/api/v1/format",
      method: "POST",
      data: makeData(),
      dataType: "json"
    }).done(function(data) {
      $('#dest').text(data.result);
    });
  });
});

function makeData() {
  var ri = $('[name=reindent]').prop('checked');
  var sc = $('[name=strip_comments]').prop('checked');
  var ic = $('[name=identifier_case]').val();
  var kc = $('[name=keyword_case]').val();
  var iw = $('[name=indent_width]').val();
  var d = {
    sql: $('#src').val(),
    reindent: ri ? 1 : 0,
    indent_width: iw,
    identifier_case: ic,
    keyword_case: kc,
    strip_comments: sc ? 1 : 0
  };
  if (ic === "")
    delete d["identifier_case"];
  if (kc === "")
    delete d["keyword_case"];
  if (!ri || iw <= 0)
    delete d["indent_width"];
  return d;
}
