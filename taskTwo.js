/**
 
 Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
(note: give general solution).

Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].

Expected Output - Below is the  order of address in which sendmail function is going to send mail.
abc@channelier.com
abc@yahoo.com
abc@gmail.com
abc@hotmail.com
 */

const sendmail = (arr) => {
  const selectedEmail = arr.sort().reduce((acc, currentEmail) => {
    if (
      !acc.find(
        (email) =>
          email.slice(email.indexOf("@")) ===
          currentEmail.slice(currentEmail.indexOf("@"))
      )
    ) {
      acc.push(currentEmail);
    }
    return acc;
  }, []);

  return selectedEmail;
};

const r1 = sendmail([
  "ghi@hotmail.com",
  "def@yahoo.com",
  "ghi@gmail.com",
  "abc@channelier.com",
  "abc@hotmail.com",
  "def@hotmail.com",
  "abc@gmail.com",
  "abc@yahoo.com",
  "def@channelier.com",
  "jkl@hotmail.com",
  "ghi@yahoo.com",
  "def@gmail.com",
]);

console.log(r1);
