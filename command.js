// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   if(cmd === 'pwd'){
//       process.stdout.write('' + process.cwd())
//   } else if(cmd === 'date'){
//       var date = new Date()
    // process.stdout.write('' + date)
//   }
// process.stdout.write('\nprompt > ');
// })
var fs = require('fs')
var request = require('request')

module.exports = {
    pwd: function(){
      process.stdout.write('' + process.cwd())
    },
    ls: function(){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function(string){
        if(string[0]==='$'){
            var searchTerm = string.slice(1)
            process.stdout.write(process.env[searchTerm])
        }
        process.stdout.write(string);
    },
    cat: function(file) {
        var contents = fs.readFileSync(file);
        // console.log(contents);
        process.stdout.write(contents);
    },
    head: function(file) {
        var contents = fs.readFileSync(file);
        setTimeout(function() {
            var lines = contents.toString().split("\n");
            lines.slice(0,5).forEach((line) => {
                process.stdout.write(line)
                process.stdout.write('\n')
            });
        }, 5000)

    },
    tail: function(file) {
        var contents = fs.readFile(file);
        var lines = contents.toString().split("\n");
        // console.log(contents);
        lines.slice(-5).forEach((line,index) => {
            if(contents[index]){
            process.stdout.write(line + '\n')
            }
        });
    },
    sort: function(file) {
        var contents = fs.readFileSync(file);
        var lines = contents.toString().split("\n");
        lines.sort();
        lines.forEach(line => {
            process.stdout.write(line);
            process.stdout.write('\n');
        });
    },
    wc: function(file) {
        var contents = fs.readFileSync(file);
        var lines = contents.toString().split("\n");
        var length = lines.length;
        process.stdout.write(String(length));
    },
    uniq: function(file) {
        var contents = fs.readFileSync(file);
        var lines = contents.toString().split("\n");
        lines.forEach((line, index) => {
            if (index === 0) process.stdout.write(line + '\n');
            else if (line !== lines[index-1]) process.stdout.write(line + '\n');
        })
    },
    curl: function(url){
        request(url,function(error,response,body){
            // console.log(error)
            // console.log(response)
            process.stdout.write(body)

        })
    
    }
}



