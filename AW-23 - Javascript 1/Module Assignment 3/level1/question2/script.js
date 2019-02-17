//Console.log out elements in JSON file
data = '[{"id" : 12312412312, "name" : "Ecuaciones Diferenciales", "url" : "/video/math/edo/12312412312"}]';

author = '[{"name_author" : "Alejandro Morales", "url" : "/author/alejandro-morales", "type" : "master"}]';

(function() {
    var mydata = JSON.parse(data);
    console.log(mydata[0].id);
    console.log(mydata[0].name);
    console.log(mydata[0].url);
})();

(function() {
    var mydata = JSON.parse(author);
    console.log(mydata[0].name_author);
    console.log(mydata[0].url);
    console.log(mydata[0].type);
})();