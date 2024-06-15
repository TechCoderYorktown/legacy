// Define hardcoded login credentials
var users = [
  { username: "bob", hashedPassword: "1a60c79e6b8cfbd2a534bc9b193c939c8dfe8d78572879ef8336d98bbcc25845" },
  // Add more users as needed
];

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function checkLogin(username, password) {
  var hashedPassword = hashPassword(password); // Hash the provided password

  // Loop through hardcoded users array
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].hashedPassword === hashedPassword) {
      return true; // Return true if username and hashed password match
    }
  }
  return false; // Return false if no match found
}

function hashPassword(password) {
  var hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, password);
  var hashString = '';
  for (var i = 0; i < hash.length; i++) {
    var byte = hash[i];
    if (byte < 0) {
      byte += 256;
    }
    var hex = byte.toString(16);
    if (hex.length == 1) {
      hex = '0' + hex;
    }
    hashString += hex;
  }
  return hashString;
}

