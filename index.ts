// type numberArr=number[];
// const arr=[1,2,3];

// function firstEle(arr: numberArr): number{
//   return arr[0];
// }
// console.log(firstEle(arr));


// type numOrStr=(number| string);
// function firstELe(arr: numOrStr[]):(numOrStr){
//     return arr[0];
// }

// const arr1=[1,2,3];
// const arr2=["abc","def","ghi"];

// console.log(firstELe(arr1));
// console.log(firstELe(arr2));


function firstELe<T>(arr:T[]){
    return arr[0];
}

const arr1=[1,2,3];
const arr2=["abc","def","ghi"];

const ans1=firstELe(arr1);
const ans2=firstELe(arr2);

ans2.toLowerCase();

 