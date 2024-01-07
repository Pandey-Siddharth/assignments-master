// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const { isUtf8 } = require('buffer')
const fs = require('fs')

function clean(filePath){
    let a = fs.readFile(filePath, 'utf-8',function(err,data){
        if(err){
            console.log("Error Occured");
        }
        let finalContent = data.replace(/\s+/g, ' ');
        let b = fs.writeFile(filePath,finalContent,function(err){
            if(err){
                console.log("Error");
                return;
            }
            console.log("File cleaned successfully");
        })
    })
}

clean('a.txt');