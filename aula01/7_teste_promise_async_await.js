const fakeAPI = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(num !== 2){
      resolve(`resposta para requisição ${num}`);
    }else{
      reject(`erro na requisição ${num}`);
    }
  }, 3000)
})

// function executarPromise() {
//   fakeAPI(1)
//     .then(response => {
//       (console.log(response))
//       fakeAPI(1)
//         .then(response => {
//           (console.log(response))
//           fakeAPI(1)
//             .then(response => {
//               (console.log(response))

//             }).catch(err => (console.log('error ', err)));

//         }).catch(err => (console.log('error ', err)));

//     }).catch(err => (console.log('error ', err)));
// }

// async function executarPromise() {
//   try {
//     console.log(await fakeAPI(1));
//     console.log(await fakeAPI(1));
//     console.log(await fakeAPI(1));
//   } catch (error) {
//     console.log("Error:", error) 
//   }
// }

// async function executarPromise() {
//   try {
//     console.log(await fakeAPI(1));
//   } catch (error) {
//     console.log("Error:", error) 
//   }

//   try {
//     console.log(await fakeAPI(2));
//   } catch (error) {
//     console.log("Error:", error) 
//   }

//   try {
//     console.log(await fakeAPI(1));
//   } catch (error) {
//     console.log("Error:", error) 
//   }
// }

executarPromise();
