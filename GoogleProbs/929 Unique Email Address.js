/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let unique = [];
  for (let i = 0; i < emails.length; i++) {
    let email = emails[i];
    let at = email.indexOf("@");

    let localName = email.slice(0, at);
    let domainName = email.slice(at);

    let newLocalName = "";
    for (let j = 0; j < localName.length; j++) {
      if (localName[j] === ".") {
        continue;
      } else if (localName[j] === "+") {
        break;
      } else {
        newLocalName += email[j];
      }
    }

    unique.push(newLocalName.concat(domainName));
  }

  let filteredEmails = unique.filter((item, i) => unique.indexOf(item) === i);

  return filteredEmails.length;
};
