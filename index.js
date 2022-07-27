data1 = new Date().toLocaleDateString();
console.log(data1);

let data = new Date();
let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
console.log(dataFormatada);