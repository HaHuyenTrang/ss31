//bài 1
function fWord(str) {
    // Tách chuỗi 
    const words = str.split(" ");
  
    // Khởi tạo biến lưu từ dài nhất và độ dài của từ đó
    let lWord = "";
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
  
      if (currentWord.length > longestLength) {
        lWord = currentWord;
        longestLength = currentWord.length;
      } else if (currentWord.length === longestLength && lWord === "") {
        lWord = currentWord;
      }
    }
  
    return { word: lWord, length: longestLength };
  }
  
  const ipStr = "5678 hhhh 90";
  const rs = fWord(inputStr);
  console.log("Từ dài nhất:", rs.word);
  console.log("Độ dài của từ:", rs.length);




//bài 2
function findLargestNumbers(...arrays) {
    const largestNumbers = [];
  
    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
  
     
      const largestNumber = Math.max(...currentArray);
  
      // Thêm số lớn nhất vào mảng kết quả
      largestNumbers.push(largestNumber);
    }
  
    return largestNumbers;
  }
  
  // Ví dụ sử dụng hàm
  const array1 = [1, 7, 3, 9];
  const array2 = [4, 2, 8, 5];
  const array3 = [6, 0, 11, 3];
 findLargestNumbers(array1, array2, array3);
 console.log("Số lớn nhất trong mỗi mảng:",  findLargestNumbers(array1, array2, array3));






 //bài 3
 function endsWith(str, target) {
    // Kiểm tra độ dài 
    const strLength = str.length;
    const targetLength = target.length;
  
  
    if (targetLength > strLength) {
      return false;
    }
  
    // So sánh 
    for (let i = 0; i < targetLength; i++) {
      if (str[strLength - targetLength + i] !== target[i]) {
        return false;
      }
    }
 
    return true;
  }
  
  // Ví dụ sử dụng hàm
  const str = "Hello, world!";
  const target = "world!";
 endsWith(str, target);
 
 
 console.log(endsWith(str, target));// true




 //bài 4
 function truncate(str, n) {
    if (str.length <= n) {
      return str; // Trả về chuỗi gốc nếu độ dài không vượt quá n
    }
  
    const truncatedStr = str.slice(0, n) + "...";

    return truncatedStr;
  }
  
  const inputStr = "Hello, world!";
  const maxLength = 7;
 truncate(inputStr, maxLength);
 console.log( truncate(inputStr, maxLength)); 





//bài 5
function Groups(arr, n) {
    const chunkedArray = [];
    let index = 0;
  
    while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + n));
      index += n;
    }
  
    return chunkedArray;
  }
  

  const lArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const groupSize = 3;
 Groups(lArray, groupSize);

  console.log( Groups(lArray, groupSize)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]




  //bài 6
  function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      // Gọi callback function với phần tử hiện tại
      const element = arr[i];
      if (callback(element, i, arr)) {
        return element;
      }
    }
  
    return undefined; 
  }
  
  const Array = [1, 2, 3, 4, 5];
  const condition = (element) => element > 3;
  fakeFind(Array, condition);
  
  console.log(fakeFind(Array, condition)); // 4




  //bài 7
  function fakeFilter(arr, callback) {
    const filteredArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (callback(element, i, arr)) {
        filteredArray.push(element);
      }
    }
  
    return filteredArray; 
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const tion = (element) => element > 2;
  const result = fakeFilter(originalArray, tion);
  console.log(result); // [3, 4, 5]