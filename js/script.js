const list = document.getElementById('list')
const spesa = ['Uova', 'Pane', 'Latte', 'Biscotti', 'Pasta', 'Affettati', 'formaggio', 'verdura', 'frutta'];

//* ciclo con for
// for(let i = 0; i < spesa.length; i++){
//     lista += `<li>${spesa[i]}</li>`
// }
    
let lista = ''
let i = 0
while(i < spesa.length){
    lista += `<li>${spesa[i]}</li>`
    i++
}
console.log(lista)
list.innerHTML = lista
