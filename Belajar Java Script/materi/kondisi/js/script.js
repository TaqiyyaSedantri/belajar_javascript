// let x = false
// let y = true
// let Z = true
// if (x) {
//     console.log('X adalah true');
// } else if (y) {
//     console.log ('Y adalah benar') 
// } else if (z) {
//     console.log ('Z adalah benar') 
// }else {
//     console.log('X. Y, Z adalah salah');
// }

let x = 'biru'

switch (x) {
    case 'kuning':
        console.log('x adalah', x);
        break
    case 'biru':
        console.log('x adalah', x);
        break
    case 'merah':
        console.log('x adalah', x);
        break
        default:
            console.log('tidak ada pilihan yang tersedia');
        break
}

//ternary
let nilai = 90

// let result = (nilai > 70) ? 'Diatas KKM' : 'Dibawah KKM'
// console.log(result)

let result = nilai > 70 && 'Diatas KKM' 
console.log(result)




