
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");
mongoose = require("mongoose");
var si = require('systeminformation');
//var cpuid = require('cpuid');
var serialNumber = require('serial-number');
/*serialNumber(function (err, value) {
    console.log(value);
});*/
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
//var cpuid = require('cpuid');

var router = express.Router();
var hddid="HDDexample";
router.get("/", function (req, res) {
    //HDDID();
    fs.readFile('/test.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
        
    res.send(data.toString());
      })
});

app.use(router);
/*
function HDDID() {

    var res="";
    console.log(si.uuid)
    si.blockDevices(function(data) {
        console.log(data)
        var propValue;
        for (var propName in data) {
            propValue = data[propName];
            if(data[propName].name == "C:"){
                hddid= data[propName].uuid;
            }
        }
    })
    return hddid;
    
}*/


//si.system().then(data => console.log(data));

app.listen(3000, function () {

console.log("Node server running on http://localhost:3000");
//console.log(si.uuid)

//console.log(cpuid);
//HDDID()
//console.log(serialNumber);
//console.log(process.platform)
//console.log(process.arch)
//console.log(process)

console.log("-------------------------------------------------------")
var pr=process.geteuid()
console.log("My geteuid:"+pr.toString())



fs.writeFile('/test.txt', process.geteuid(), err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })



});