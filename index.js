// Promise = An Objecy that manages asynchtonous operation.
//           Wrap a Oriuses Ibhect around {asynchronous code}
//           "I promise to return a value"
//           PENDING ->RESOLVED or REJECTED
//           new Promise((resolve, reject)  => {asynchronous code})
// 
// 
//       
// DO THESE CHORES IN ORDER
// 
// 
// 
//1. WALK THE DOG 
//2.CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH




function walkDog(){


    

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const dogwalked = true

            if(dogwalked){
                resolve("You walk the dog");
            }else{
                reject("YOu didn't walk the dog")
            }

            
            
        },1500)
    
    })
}

function cleanKitchen(){
  

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const cleankitchen =true

            if(cleanKitchen){
                resolve("You clean the kitchen");
            }else{
                reject("YOu didn't clean the kitchen")
            }
            
            
        },2500)
    })
}


function takeOutTrash(){
 


    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const taketrash=false
            if(taketrash){
                resolve("You took out the trash");
            }else{
                reject("You didn't take out the trash")
            }
          
        
        },500)
    })
}

walkDog().then(value=>{console.log(value); return cleanKitchen()})
         .then(value=>{console.log(value); return takeOutTrash()})
         .then(value=>{console.log(value); console.log("You have done all the chores")})
         .catch(error=>console.error(error));