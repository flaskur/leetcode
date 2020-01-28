/**
 * This one we are given an array of strings which are supposedly in email format.
 * The main conditionals are that the local address (first part) is duplicated based on special operators of . and +. The + means ignore everything after. The . means just ignore the period.
 * Our goal is to give the correct number of unique emails, but to do so, we need to keep track of the total number of instances and check for reoccurance through something like a include statement for arrays.
 * Also be aware that you are working with an array of strings which need to be manipulated properly.
 * 
 * 
 * Issue with the match and conversion between arrays and strings. Tried to combine step for removing periods and cutting string, but didn't work since local can exclude + on its own. 
 * 
 * Implementation loops through each email string and removes the periods globally and then checks if there is a + sign. Slices string if so, and creates a new email.
 * This fixedEmail is pushed into an array and used to check uniqueness. 
 * Actually faster than 70.72% of other implementations.
 * 
 * Could have used Sets instead of Array and include to test for uniqueness since sets cannot have duplicates. Could have also used better regex to manipulate string. Also it doesn't handle cases where there are multiple @ signs.
 */


let numUniqueEmails = function(emails) {
  // emails is an array of strings that are in email format.
  let uniqueEmails = new Array();

  emails.forEach(email => {
    // Assuming only one @ character... array destructuring.
    let [local, domain] = email.split('@');
      
    local = local.replace(/[.]/g, '');
      
    if (local.includes('+') && local.length > 1) {
        local = local.slice(0, local.indexOf('+'));
    }

    let fixedEmail = `${local}@${domain}`;
    
    if (!uniqueEmails.includes(fixedEmail)) {
      uniqueEmails.push(fixedEmail);
    }
  });
    
  return uniqueEmails.length;
};