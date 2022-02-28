// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা র‍্যান্ডম্লি প্রিন্ট করতে পারি

function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(getRandomNumbers(1, 6));

// কিভাবে আমরা শ্রেণীকক্ষের সবার নাম ক্রমনুযায়ি সাজাতে পারি

const students = [
  "Mehedi",
  "Saif",
  "Rakib",
  "Jitu",
  "Jibon",
  "Shuvro",
  "Hakim",
  "Pranto",
  "Akash",
  "Arif",
  "Ashik",
];

// console.log(students.sort());

// কিভাবে আমরা শ্রেণীকক্ষের সবার রোল বড় থেকে ছোট এর দিকে ক্রমনুযায়ি সাজাতে পারি

const numberArray = [1, 31, 41, 42, 99, 79, 21, 45, 90];
// console.log(
//   numberArray.sort(function (a, b) {
//     return a - b;
//   })
// );

// কোন সাল লিপইয়ার কিনা কিভাবে বের করব

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is Leap Year`);
  } else {
    console.log(`${year} is not Leap Year`);
  }
}

// isLeapYear(2024);

// কোন Sentence এ কত গুল Vowel আছে তা বের করা

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel(sentence) {
  let count = 0;
  let letters = Array.from(sentence);

  letters.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });

  return count;
}

// console.log(countVowel("I Love Bangladesh"));

// কোন array থেকে Duplicate নাম্বারগুলো কিভাবে বের করে আনতে পারি

const numbers = [
  1, 2, 5, 15, 41, 12, 21, 43, 12, 12, 31, 43, 53, 53, 34, 23, 53, 34, 51,
];

const duplicates = numbers.filter(function (value, index, array) {
  // return array.indexOf(value) === index; // Output will be unique value only
  return array.indexOf(value) !== index; // Output will be duplicate value only
});

// console.log(duplicates);
