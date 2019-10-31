var multiplication = (function() {
    let g= require('random');
    let temp1= g.int(min = 0, max = 99);
    let temp2= g.int(min = 0, max = 99);
    total= temp1 + temp2;
    console.log('Multiplication:' + temp1 +'+' + temp2);
    var inq = require('inquirer');
    inq.prompt([
    {
      type: 'checkbox',
      message: 'Please Select Answer',
      name: 'Multiplication Answers',
      choices: [
        {
          name: 'A. '+total
        },
        {
          name: 'B. '
        },
        {
          name: 'C. '
        },
        {
          name: 'D. '
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
});
    
module.exports = multiplication;