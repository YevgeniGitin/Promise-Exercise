 async function createPromise(val) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             if (val > 10)
                 resolve("true");
             else
                 reject("The value is too small");
         }, 500)
     });
 }


 for (let i = 0; i < 20; i += 3) {
     createPromise(i)
         .then(res => console.log(res))
         .catch(err => console.log(err));
 }