// // email
const trees = document.getElementById('trees');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function sendEmailtoOwner(){
  const ebody=
    `Name: ${name1.value}
    <br>
    Email : ${email.value}
    <br>
    Number of trees: ${trees.value}
    Message: ${message.value}`;
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "manasi.deshmukh@cumminscollege.in",
    Password : "79E12A04170D79BF06E685839AA2CBAF56B5",
    To : 'manasi.deshmukh@cumminscollege.in',
    From : 'manasi.deshmukh@cumminscollege.in',
    Subject : "Contribution for Forest Friends by " + email.value,
    Body : ebody
});
}

function sendEmailtoUser(){
  const ebody=
    `
    Congraulations on joining #ForestFriends community!!
    <br>
    Thank you for your valuable contibution :)
    <br>
    ${trees.value} Tress Planted by ${name1.value} for
    ${message.value}`;
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "manasi.deshmukh@cumminscollege.in",
    Password : "79E12A04170D79BF06E685839AA2CBAF56B5",
    To : email.value,
    From : 'manasi.deshmukh@cumminscollege.in',
    Subject : trees.value+ "Trees Planted!!" ,
    Body : ebody
});
}