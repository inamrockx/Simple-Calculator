
// operators
/* const sum= document.querySelector('.operators').children[0];
const subtract= document.querySelector('.operators').children[1];
const multiply= document.querySelector('.operators').children[2];
const divide= document.querySelector('.operators').children[3];
const result= document.querySelector('.operators').children[4];


// row1
const digit_1= document.querySelector('.row1').children[0];
 const digit_2= document.querySelector('.row1').children[1];
 const digit_3= document.querySelector('.row1').children[2];

 //row2
 const digit_4= document.querySelector('.row2').children[0];
  const digit_5= document.querySelector('.row2').children[1];
   const digit_6= document.querySelector('.row2').children[2];

//row3
const digit_7= document.querySelector('.row3').children[0];
const digit_8= document.querySelector('.row3').children[1];
const digit_9= document.querySelector('.row3').children[2];
//row4
const digit_0= document.querySelector('.row4').children[0]; */


/* function add(a,b) {
    return a+b;
    
}
function sub(a,b) {
    return a-b;
    
}
function mult(a,b) {
    return a*b;
    
}
function divid(a,b) {
    return a/b;
    
}

const digits_arr = [digit_1.value , digit_2.value , digit_3.value , digit_4.value , digit_5.value , digit_6.value , digit_7.value , digit_8.value , digit_9.value , digit_0.value ];

const operators_arr = [sum.value , multiply.value , divide.value , subtract.value]; */

/* result.addEventListener('click' , ()=>
{
    digits_arr.forEach(n => {
        if(digits_arr[n] != '')
        {

        }
    });

}); */


// calc

/* const buttons = document.querySelectorAll('button');


let results = [];
// 2. Define your specific function
function handleClick(event) {
  console.log('Button clicked:', event.target.textContent);
   results.push(event.target.textContent);
   const p = document.querySelector('p');

   if(event.target.textContent==='=')
   {

    console.log('entered');
     operatorHandler(); 

   }
   else if (event.target.textContent==='C')
    {
        results=[];
    }

    
    results.forEach((n,index)=>{
        p.innerHTML=` ${results[index]} `
        if (index===1)
        {
            p.innerHTML=` ${results[0]}  ${results[1]} `;

        }
        else if (index===2)
        {
            p.innerHTML=` ${results[0]}  ${results[1]} ${results[2]} `;
        }
        else if(index===3)
        {
            p.innerHTML=` ${results[0]}  ${results[1]} ${results[2]}    `;
            operatorHandler();
        }
    });

   
}

// 3. Loop and add listener to each
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

console.log(results);

results.forEach(() => {
    console.log('hello');
});




function operatorHandler()
{

    if (results[1]==='+')
    {
        add();
    }
    else if (results[1]==='-')
    {
        subtract();
    }
    else if (results[1]==='*')
    {
        multiply();
    }
    else if (results[1]==='/')
    {
        divide();
    }

};


function add()
 {
    const sum=parseInt(results[0])+parseInt(results[2]);
    console.log(sum);
    const p = document.querySelector('p');
    p.innerHTML=`${sum}`;
    
 }
function subtract()
 {
    console.log(parseInt(results[0])-parseInt(results[2]));
 }
function multiply()
 {
    console.log(parseInt(results[0])*parseInt(results[2]));

 }
function divide()
{
    console.log(parseInt(results[0])/parseInt(results[2]));

}

 */




const buttons = document.querySelectorAll('button');

let results = [];

   function handleClick(event) {
  console.log('Button clicked:', event.target.textContent);

  const value = event.target.textContent;

  if (!isNaN(value)) 
  {
      if (results.length === 0 || isNaN(results[results.length - 1]))
      {
          results.push(value);
      }
      else
      {
          results[results.length - 1] += value;
      }
  }
  else 
  {
      results.push(value);
  }

  const p = document.querySelector('p');
  p.innerHTML = `${results.join('')}`;
}



buttons.forEach(button => {

    if(button.textContent==='=')
    {
        button.addEventListener('click', calculation);
    }
    else if (button.textContent==='C')
    {
        button.addEventListener('click', reset);
    }
    else if (button.textContent==='B')
    {
        button.addEventListener('click', reverse);
    }
    else 
    {
         button.addEventListener('click', handleClick);  
    } 

});

console.log(results);

results.forEach(() => {
    console.log('hello');
});

function calculation()
{
    const p = document.querySelector('p');
    const c = p.textContent;
    p.textContent=`${eval(c)}`;
    results=[];
    results.push(p.textContent);
    console.log(eval(c));
    
}

function reset()
{
    results=[];
    const p = document.querySelector('p');
    p.textContent='';
}

function reverse()
{
    results.splice(results.length-1 , results.length-1);
    const p = document.querySelector('p');
   p.innerHTML = `${results.join('')}`;

   if (results.length===1)
   {
    results=[];
   }

}