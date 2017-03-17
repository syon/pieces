$(function() {
  
  function updateURL() {
    var publisher = $('#publ').val();//'robertohuertasm';
    var extensionName = $('#extn').val();//'vscode-icons';
    var version = $('#vers').val();//'7.3.0';
    var url = `https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extensionName}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage`;
    $('#result').text(url);
  }
  updateURL();
  
  $(document).on('click', '#latest', function(){
    var publisher = $('#publ').val();//'robertohuertasm';
    var extensionName = $('#extn').val();//'vscode-icons';
    fetch(`https://marketplace.visualstudio.com/items?itemName=${publisher}.${extensionName}`)
      .then(r => { return r.text(); })
      .then(t => {
        var m = t.match(/class="vss-extension".*"version":"(.....)"/);
        $('#vers').val(m[1]);
        updateURL();
      }).catch(e => {
        var a = $('<div class="alert"></div>')
        $('.alert-wrap').append(a.append(e));
      });
  });
  
  $(document).on('change', ':text', function(){
    updateURL();
  });
  
  $(document).on('click', ':submit', function(ev){
    ev.preventDefault();
    window.open($('#result').text());
  });
  
  $(document).on('click', '#sch', function(ev){
    var extensionName = $('#extn').val();//'vscode-icons';
    var url = (`https://marketplace.visualstudio.com/search?term=${extensionName}&target=VSCode&sortBy=Relevance`);
    window.open(url);
  });
  
  $(document).on('click', '#oep', function(ev){
    var publisher = $('#publ').val();//'robertohuertasm';
    var extensionName = $('#extn').val();//'vscode-icons';
    var url = (`https://marketplace.visualstudio.com/items?itemName=${publisher}.${extensionName}`);
    window.open(url);
  });
});
