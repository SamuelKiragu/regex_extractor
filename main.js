const yargs = require('yargs');

let argv = yargs
  .options(
  'ifile',{
    alias: 'i',
    description: 'path of the input file',
    type: 'string'
  }
)
  .options(
  'regex',{
    alias: 'r',
    description: 'regular expression to extract',
    type: 'string'
  }
)
  .options(
  'ofile',{
    alias: 'o',
    description: 'path of the output file',
    type: 'string'
  }
)
  .help()


// TODO: WRITE TRY...CATCH
// FOR THE FILE, WHEN IT IS NOT FOUND

// parameters: file, regex
// file can be both a file or a string
// review this approach in future
function urlScrapper(file, regex){
  var fs = require("fs")
  var re = RegExp(regex,'g')
  let data;

  data = fs.readFileSync(file,'utf8');

  var init_arr = [...data.matchAll(re)]
  var arr = []
  for(el of init_arr){
    arr.push(el[0]);
  }
  return arr
}


// parameters: data


// EXECUTION OF THE SCRIPT
var fs = require("fs")
console.log(argv.argv.r)
const data = urlScrapper(argv.argv.i,argv.argv.r).join('\n')
fs.writeFile(argv.argv.o, data, err => console.log(err))
