// Object ----> It's a key value pair

const item = {
    "first": true,
    "second": false,
    "third": 67,
    "fourth": undefined
}
document.write(item["third"]);

document.write("<br><br>");

//modication in the const obj
const a = {
    student: 'vivek',
    section: 1,
    isPrincipal: false
}
//a = 45   ----> Not possible
//do istead
a['friend'] = "Shubham"
a['teacher'] = "Ajay"
document.write(a['friend']);
document.write("<br>",a['friend']," ",a['teacher']);