let título = document.createElement("h1");
título.textContent = "Hello World";

let p = document.createElement("p");
p.textContent = "Teste";

let root = document.getElementById("root");
root.append(título);
root.append(p);
