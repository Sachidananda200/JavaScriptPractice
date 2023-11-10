// async function program

// const sayMyname = function() {
//     console.log('Sachidananda Mallick');
// }
//  const clickme = setTimeout(sayMyname,2000);

// using arraow function for set time out
// setTimeout(() =>{console.log("Sachidananda Mallick")}, 3000)


//clearTimeout(clickme) // used to clear the timeout 

// set interval is used to do a work at a particular interval
 const intervalid =setInterval(()=>{
    console.log("sachidananda");
},2000);

clearInterval( intervalid )// clear the interval