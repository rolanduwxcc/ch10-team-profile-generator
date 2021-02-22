const fs = require('fs');

//creating a JS Promise!
//3 states Pending, Resolved, Rejected/failed
const writeFile = fileContent => {
    //resolve and reject are function parameters
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and sent the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function to make sure the Promise doesn't accidentally exectue the resove() func as well
                return;
            }
            
            //if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'HTML created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Styles copied!'
            });
        });
    });
};


module.exports = {writeFile, copyFile};