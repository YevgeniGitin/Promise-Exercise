 async function cteatepromise(val) {
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
     cteatepromise(i)
         .then(res => console.log(res))
         .catch(err => console.log(err));
 }