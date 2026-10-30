var a ="3";
var b ="8";
console.log("a is"+a);
console.log("b is"+b);
document.body.innerHTML+="<br>a is"+a+ "<br>b is"+b;
var tweet=prompt("eneter your twit;");
var tweetcount = tweet.length;
console.log("you have written"+tweetcount+"characters.");

if(tweetcount<= 50){
    var left = 50 - tweetcount;
    console.log("you have" +left+ "characters left.");
} else{
    var trimmed = tweet.slice(0,50);
    console.log("you have written 50 characters.");
    console.log("you text has been trimmed:"+trimmed+"");
}
var fullName = prompt("Enter your full name: ");

// Make everything lowercase first
var lowerName = fullName.toLowerCase();

// Split into words
var words = lowerName.split(" ");

// Capitalize each word
for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

// Join back
var finalName = words.join(" ");

console.log(finalName);
alert(finalName); // This will show on main screen