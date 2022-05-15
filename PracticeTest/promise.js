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

