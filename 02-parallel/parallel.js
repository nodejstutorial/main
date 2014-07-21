// http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb

var fs = require('fs'), sys = require('sys');

fs.readFile('hello.txt', function(err,data) {
  sys.puts("hello: "+data);
});

// unlink doesn't delete the file, do you know why ?
fs.unlink('letter.txt',function(err){
  //sys.puts('error deleting');
  //console.log(err);
});

fs.writeFile('letter.txt', 'hello world @' + new Date().getTime(), function() {
  sys.puts("hello world @" + new Date().getTime());
});