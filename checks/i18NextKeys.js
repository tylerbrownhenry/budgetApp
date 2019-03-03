const fs = require('fs');
const path = require('path');
const process = require("process");


// console.log("__dirname = %s", );
function filewalker(dir, done) {
    let results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function(file){
            const originalName = file.replace('.js','');
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat){
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    // Add directory to array [comment if you need to remove the directories from the array]
                    filewalker(file, function(err, res){
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    if(file.indexOf('.js') && file.indexOf('.test.js') === -1 && file.indexOf('.md') === -1 && file.indexOf('.js.html') === -1 ){
                        results.push(file);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};


function readFile(filePath,cb){
    console.log('fire',filePath);
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            let results = [];
            let single = /(i18next\.t\()((['"])(?:(?=(\\?))\4.)*?\3)/g
            let match = single.exec(data);            
            while (match != null) {
                results.push(match[2].replace(/\'?\"?/g,''));
                match = single.exec(data);
            }
            cb(results);
        } else {
            console.log(err);
        }
    });
}


function loopReadFile(point,data,list,cb){
    readFile(point,(results)=>{
        list = list.concat(results);
        point = data.shift();
        if(!point){
            cb(list);
        } else {
            loopReadFile(point,data,list,cb);
        }
    });

}

function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}


function findPath(a, obj) {
    for(var key in obj) {                                         // for each key in the object obj
        if(obj.hasOwnProperty(key)) {                             // if it's an owned key
            if(a === obj[key]) return key;                        // if the item beign searched is at this key then return this key as the path
            else if(obj[key] && typeof obj[key] === "object") {   // otherwise if the item at this key is also an object
                var path = findPath(a, obj[key]);                 // search for the item a in that object
                if(path) return key + "." + path;                 // if found then the path is this key followed by the result of the search
            }
        }
    }
}


fs.readFile(path.resolve(__dirname, "../app/utils/i18next/english.js"), {encoding: 'utf-8'}, function(err,data){
    data = data.replace(/export default/g,'');
    data = data.replace(/(['"])?([a-zA-Z0-9]+)(['"])?:/g, '"$2":');
        // console.log('en',);
    let myData = JSON.parse(data)
console.log('data',data);
    
    filewalker('app', function(err, data){
        if(err){
            throw err;
        }
        let list = [];
        let point = data.shift();
        if(point){
            loopReadFile(point,data,list,(results)=>{
                results.forEach(result => {
                    console.log(result);
                    eval('myData.translation.'+ result);
                })
            });
            // console.log('i18NextConfig',i18NextConfig);
        }
    });
})