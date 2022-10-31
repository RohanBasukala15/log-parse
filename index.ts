var fs = require('fs');

const ipRegex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g;
const urlReges = /(?:(GET|POST) )(\S+)/g;

function findTopThreeData(data) {
  var iterateData = data.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj
  }, [])
  var sortedData = Object.fromEntries(Object.entries(iterateData).sort((a, b) => { return b[1] - a[1] }).splice(0, 3));
  return sortedData;
}

var readFromLogFile = fs.readFileSync("./programming-task-example-data.log", 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading the file");
  } else {
    return data.toString();
  }
});

function findUniqueAddress() {
  let matchingAddress = readFromLogFile.match(ipRegex);
  return [...new Set(matchingAddress)];
}

function findTopUrls() {
  let matchingURLs = readFromLogFile.match(urlReges);
  return findTopThreeData(matchingURLs);
}

function findTopAddresses() {
  let matchingAddresses = readFromLogFile.match(ipRegex);
  return findTopThreeData(matchingAddresses);
}


