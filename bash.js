var commands = require('./command')
process.stdout.write('prompt > ')

process.stdin.on('data', function (data) {
  var cmd = data.toString().slice(0,data.indexOf(' ')); // remove the newline
  var argument = data.toString().slice(data.indexOf(' ')+1).trim();
  if(cmd === 'pwd'){
    commands.pwd()
  } else if(cmd === 'date'){
      var date = new Date()
    process.stdout.write('' + date)
  } else if(cmd === 'ls'){
      commands.ls()
  } else if(cmd === 'echo'){
      commands.echo(argument)
  } else if (cmd === 'cat') {
    //   console.log(argument);
      commands.cat(argument)
  } else if (cmd === 'head') {
      commands.head(argument)
  } else if (cmd === 'tail') {
      commands.tail(argument)
  } else if (cmd === 'sort') {
    commands.sort(argument);
  } else if (cmd === 'wc') {
    commands.wc(argument);
  } else if (cmd === 'uniq') {
    commands.uniq(argument);
  } else if (cmd === 'curl'){
      commands.curl(argument)
  }


//   process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

