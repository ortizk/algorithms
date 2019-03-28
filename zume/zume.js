// You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a count and a domain name. It looks like this:

// counts = [ "900,google.com",
//      "60,mail.yahoo.com",
//      "10,mobile.sports.yahoo.com",
//      "40,sports.yahoo.com",
//      "300,yahoo.com",
//      "10,stackoverflow.com",
//      "2,en.wikipedia.org",
//      "1,es.wikipedia.org",
//      "1,mobile.sports" ]

// Write a function that takes this input as a parameter and returns a data structure containing the number of hits that were recorded on each domain AND each domain under it. For example, an impression on "mail.yahoo.com" counts for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain as the last item of the input.)

// Sample output (in any order/format):

// getTotalsByDomain(counts)
// 1320    com
//  900    google.com
//  410    yahoo.com
//   60    mail.yahoo.com
//   10    mobile.sports.yahoo.com
//   50    sports.yahoo.com
//   10    stackoverflow.com
//    3    org
//    3    wikipedia.org
//    2    en.wikipedia.org
//    1    es.wikipedia.org
//    1    mobile.sports
//    1    sports

let counts = [ "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org",
    "1,mobile.sports" ];

    

//inout is an array or strings,
// split each element from count and domain
// split domain into object with value being the count
// console.log(counts[0].split(','))

const splitData = (counts) => {
  const firstSplit = [];
  const obj = {};
  for(let i = 0;i < counts.length;i++){
      firstSplit.push(counts[i].split(','));
  }
  for(let j = 0; j < firstSplit.length; j++){
    firstSplit[j][1] = firstSplit[j][1].split('.');
    let domain = [];
    for(let x = firstSplit[j][1].length; x >= 0;x--){
      if(firstSplit[j][1][x] !== undefined){
        domain.unshift(firstSplit[j][1][x])
      }
      if(!obj[domain]){
        obj[domain.join('.')] = parseInt(firstSplit[j][0]);
      } else {
        obj[domain] = obj[domain] + parseInt(firstSplit[j][0])
      }
    } 
  } 
  return obj
}

console.log(splitData(counts))





