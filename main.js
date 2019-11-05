var loop = require('node-while-loop');
var prompt = require('prompt');
var addition= require('./addition');
var multiplication= require('./multiplication');
var prompt_attributes = (
    {
        // The fist input text is assigned to username variable.
        name:'amount',
    }
)
console.log("Enter the Number of Maths Problems Needed");
prompt.start();
function processData (callback) {
    prompt.get('amount', function (err, result) {
        if (err) {
            console.log(err);
            return callback(err);
        }else {
            var amount = result.amount;
            var i = 1;
            loop.while(function () {
                return  i <= amount;
            }, function () {
                let c= require('random');
                assign= c.int(min= 1, max= 2);
                if (assign = 1) {
                    console.log(addition);
                    i++;
                }else{
                    console.log(multiplication); 
                }
                
            });
        }
    }   
});