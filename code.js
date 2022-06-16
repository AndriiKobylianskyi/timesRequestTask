//Написати функцію яка відправляє запит на сервер задану кількість разів(задану аругментом), якщо всі спроби невдали видати помилку


// document.querySelector('button').addEventListener("click", () => {
//     let tryes = 0
//     function limitedRequest(maxTryes) {
//         timerId = setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/todos/1')
//                 .then(response => response.json())
//                 .then(json => console.log(json))
//                 .catch(() => {
//                     tryes++
//                     console.log(tryes)
//                     if (tryes > maxTryes) {
//                         console.log(maxTryes)
//                         console.log("Капець")
//                     } else {
//                         limitedRequest(maxTryes)
//                     }
//                 })

//         }, 3000)
//         return
//     }
//     limitedRequest(3)
// })


 document.querySelector('button').addEventListener("click", ()=>{
    const curryingFabric = (tries) => {
        function query(tryNumber = 1) {
          console.log("tryNumber: ", tryNumber);
          return fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
              if (tryNumber < tries) {
                return query(tryNumber + 1);
              }
      
              console.log(`Капець`);
            });
        }
      
        return query;
      };
const query4Times = curryingFabric(4);
query4Times()
 })