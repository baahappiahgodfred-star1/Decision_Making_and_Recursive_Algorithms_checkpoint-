// ======================
// DECISION MAKING
// ======================

// 1. Leap Year Checker
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0 && year % 400 !== 0) {
        return false;
      }
      return true;
    }
    return false;
  }
  
  // 2. Ticket Pricing
  function ticketPrice(age) {
    if (age <= 12) {
      return 10;
    } else if (age >= 13 && age <= 17) {
      return 15;
    } else {
      return 20;
    }
  }
  
  
  // ======================
  // RECURSION
  // ======================
  
  // 3. Fibonacci
  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
  
  // 4. Palindrome Checker
  function isPalindrome(str) {
    // clean string
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    if (str.length <= 1) return true;
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    return isPalindrome(str.slice(1, -1));
  }
  
  
  // ======================
  // TEST
  // ======================
  
  console.log("Leap Year:");
  console.log(isLeapYear(2024)); // true
  
  console.log("\nTicket Price:");
  console.log(ticketPrice(15)); // 15
  
  console.log("\nFibonacci:");
  console.log(fib(6)); // 8
  
  console.log("\nPalindrome:");
  console.log(isPalindrome("madam")); // true