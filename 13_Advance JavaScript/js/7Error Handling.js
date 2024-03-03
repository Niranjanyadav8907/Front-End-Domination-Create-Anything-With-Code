// Error Handlings
// try catch  kya hota aap apne pure code ko try me dal dijiye or aapko lgta hai kucch
// gadhar hain phir aap  throw Error("koi gadbar huyi") de dijiye  ab iske baad hoga 
// jaise hi throw error ka code chleg phir uske  baad ka code nhi chleg apir sidhe
// catch ka code chlega  or catch me aap  err ko aap print kr skte hain 

function divide(a, b){
    try {
      if (b == 0) {
       throw Error("koi gadbar huyi");
       }
       console.log(a / b);
    } catch (err) {
      console.log(err);
    }  
   }   
  
  divide(10, 0);