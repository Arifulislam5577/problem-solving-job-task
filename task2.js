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

  return selectedEmail.join("\n");
};

const result1 = sendmail([
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

console.log(result1);
