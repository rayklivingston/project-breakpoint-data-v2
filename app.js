const scrape = require('website-scraper-existing-directory');
const options = {
  urls: ['http://nodejs.org/'],
  directory: '\Save'
};

async function start() {
  //with async/await
  const result = await scrape(options);

  // with promise
  scrape(options).then((result) => { });

  // or with callback
  scrape(options, (error, result) => { });

//urls

  scrape({
    urls: [
      'http://nodejs.org/',	// Will be saved with default filename 'index.html'
      { url: 'http://nodejs.org/about', filename: 'about.html' },
      { url: 'http://blog.nodejs.org/', filename: 'blog.html' }
    ],
    directory: '\Save'
  });
  //directory
//sources
  scrape({
    urls: ['http://nodejs.org/'],
    directory: '\Save',
    sources: [
      { selector: 'img', attr: 'src' },
      { selector: 'link[rel="stylesheet"]', attr: 'href' },
      { selector: 'script', attr: 'src' }
    ]
  });

  /*eslint max-depth: ["error", 4]*/
  /*eslint-env es6*/

  function foo() {
    for (; ;) { // Nested 1 deep
      while (true) { // Nested 2 deep
        if (true) { // Nested 3 deep
          if (true) { // Nested 4 deep
          }
        }
      }
    }
  }

  //maxRecursiveDepth=1 AND html (depth 0) -> html (depth 1) ⟶ img (depth 2)

  // use same request options for all resources
  scrape({
    urls: ['http://example.com/'],
    directory: '\Save',
    request: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
      }
    }
  });

  /* Separate files into directories:
    - `img` for .jpg, .png, .svg (full path `/path/to/save/img`)
    - `js` for .js (full path `/path/to/save/js`)
    - `css` for .css (full path `/path/to/save/css`)
  */
  scrape({
    urls: ['http://example.com'],
    directory: '\Save',
    subdirectories: [
      { directory: 'img', extensions: ['.jpg', '.png', '.svg'] },
      { directory: 'js', extensions: ['.js'] },
      { directory: 'css', extensions: ['.css'] }
    ]
  });
  //set default filename
  const Linter = require("eslint").Linter;
  const linter = new Linter();

  const messages = linter.verify("var foo;", {
    rules: {
      semi: 2
    }
  }, { filename: "foo.js" });

  //URLFilter
  scrape({
    urls: ['http://example.com/'],
    urlFilter: function (url) {
      return url.indexOf('http://example.com') === 0;
    },
    directory: '\Save'
  });

  //fileName Generator
  scrape({
    urls: ['http://example.com/'],
    urlFilter: (url) => url.startsWith('http://example.com'), // Filter links to other websites
    recursive: true,
    maxRecursiveDepth: 10,
    filenameGenerator: 'bySiteStructure',
    directory: '\Save'
  });
  //saveResource
  registerAction('saveResource', async ({resource}) => {
    const filename = resource.getFilename();
    const text = resource.getText();
    await saveItSomewhere(filename, text);
  });




}

// //debug app.js
// var debug = require('debug')('start')
//   , http = require('start')
//   , name = 'My App';

// // fake app

// debug('booting %o', name);

// http.createServer(function(req, res){
//   debug(req.method + ' ' + req.url);
//   res.end('hello\n');
// }).listen(3000, function(){
//   debug('listening');
// });

// // fake worker of some kind

// require('./worker');
// var debug = require('debug')('myfirst');
// debug('Hello');



//export debug=myfirst; node app.js
//export default start;