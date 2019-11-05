    let g= require('random');
    let temp1= g.int(min = 0, max = 99);
    let temp2= g.int(min = 0, max = 99);
    total= temp1 + temp2;
    console.log('Addition:' + temp1 +'+' + temp2);
    var Array = require('node-array');
    let ans= [total, total/2, total+total, total + 3];
    let ans2=['a','b','c','d'];
    var i = 0;
    loop.while(function () {
    return  i = 3;
}, function () {
     ans2[i]= ans[g,int(min=i-1, max=i)];
     i++;
    });
    
    var inq = require('inquirer');
    inq.prompt([
    {
      type: 'checkbox',
      message: 'Please Select Answer',
      name: 'Multiplication Answers',
      choices: [
        {
          name: 'A. '+ans2[0]
        },
        {
          name: 'B. '+ans2[1]
        },
        {
          name: 'C. '+ans2[2]
        },
        {
          name: 'D. '+ans2[3]
        }
    ],
    validate: function(answer) {
      if (answer.length  < 1) {
        return 'You must choose at ONE answer';
      }

      return true;
    }
  }
])