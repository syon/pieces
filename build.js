var Metalsmith = require('metalsmith');
var less       = require('metalsmith-less');
var assets     = require('metalsmith-assets');
var markdown   = require('metalsmith-markdown-remarkable');
var prism      = require('metalsmith-prism');
var jade       = require('metalsmith-pug');
var layouts    = require('metalsmith-layouts');
var mapsite    = require('metalsmith-mapsite');
var watch      = require('metalsmith-watch');

function watching() {
  if (process.env.NODE_ENV === 'development') {
    return watch({
      paths: {
        "${source}/**/*": "**/*",
        "layouts/**/*": "**/*",
        "assets/**/*": "**/*"
      },
      livereload: true,
    });
  }
}

Metalsmith(__dirname)
  .destination('pieces')
  .metadata({
    site: {
      name: 'syon/pieces'
    }
  })
  .use(assets({
    source: './assets',
    destination: './assets'
  }))
  .use(less())
  .use(markdown('full', {
    html: true,
    linkify: true,
    typographer: true
  }))
  .use(prism())
  .use(jade())
  .use(layouts({engine:"jade"}))
  .use(mapsite({
    hostname: 'https://syon.github.io/pieces/'
  }))
  .use(watching())
  .build(function(err){
    if (err) throw err;
  });
