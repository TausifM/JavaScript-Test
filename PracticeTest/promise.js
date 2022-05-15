// Promise having 3 stages
// 1. Pending
// 2. Resolve
// 3. Reject

// Constructor Syntax
//let promiseObj = new Promise(executor)

const promiseObj1 = new Promise((resolve, reject) => {
  try {
    resolve();
  } catch (error) {
    reject(error);
  }
});

// TASK - Promise me after 2 seconds roll no find and also Student name
// 1 . STEP - PROMISE IS PRODUCE
const promiseObj2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rollNo = [1, 2, 3, 4, 5];
    console.log(rollNo);
    resolve(rollNo);
    reject("Error while fetching data");
  }, 2000);
});
// 2. STEP - CONSUME PROMISE
promiseObj2.then((rollNo) => {
  console.log(rollNo);
});

const getBioData = (indexData) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexData) => {
        let biodata = {
          name: "Tausif",
          age: 27,
        };
        resolve(
          `My roll no ${indexData}. My name is ${biodata.name} and My age is ${biodata.age} years`
        );
      },
      2000,
      indexData
    );
  });
};

// 3. STEP - REJECT AND REASON OF REJECT

// UncaughtException Error
promiseObj2
  .then((rollNo) => {
    console.log(rollNo);
    return getBioData(rollNo[1]);
  })
  .then((kuchbhi) => {
    console.log(kuchbhi);
  })
  .catch((err) => {
    console.log(err);
  });

//=============Code Step by Step================//

//1. Finally Keyword
//2. Exception Handling with Promise
//3. Promise Chaining
//4. Error Handling with Promise
//5. Promise.all
//6. Promise.allsettled
//7. Promise.race

// Below example explaining how synchronous JavaScript fails 
// to get data which is taking time to resolve

let data1 = 1;
console.log(data1); // 1 
data1=2
setTimeout(() => {
console.log(data1); // 3
}, 2000);
data1 = 3;
console.log("last",data1); // 3

// Simple Promise 
let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name : "Tausif", age: 27})
        reject("Error to get")
        //throw new Error("data issue")
    },2000) 
})
data.then((result) => {
    //throw new Error("data issue")
    console.log("then block", result)
}).catch((err) => {
    console.log("catch block", err)
}).finally((result) => {
    console.log("FINALLY", result)
})
console.log("synchronous");


// When Promisenis resolve more than 01 ONE then 
// It is called Promise Chainning.
let data2 = fetch("https://jsonplaceholder.typicode.com/todos/")
// console.log(data2);
data2.then((result) => {
    //console.log(result);
    return result.json()
}).then((res) => {
    console.log("2nd result",res)
})


// Promise.all -- Its having drawback if any one Promise will reject then only that will show in the catch not other 
// will fullfilled or reject that information is not shown
let data4 = Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2 second")
        }, 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve("1 second")
            reject("Error in 2nd Promise")
        }, 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4 second")
        }, 4000)
    })
])
data4.then((result) => {
    //throw new Error("data issue")
    console.log("then block", result)
}).catch((err) => {
    console.log("catch block", err)
}).finally((result) => {
    console.log("FINALLY", result)
})