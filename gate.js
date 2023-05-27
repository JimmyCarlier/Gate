// PORTE

// let gate = [[]]
// const size = 20
// for (let row = 0; row < size; row++) {
//     gate[row] = []
//     for (let column = 0; column < size; column++) {
//         gate[row][column] = " "
//     }
// }

// for (let edge = 0; edge < size / 2; edge += 4) {
//     for (let row = edge; row < size - edge; row++) {
//         for (let column = edge; column < size - edge; column++) {
//             if ((row === edge) || (row === size - 1 - edge)
//                 || (column === edge) || (column === size - 1 - edge)) {
//                 gate[row][column] = "X"
//             }
//         }
//     }
// }

// for (let row = 0; row < size; row++) {
//     let line = ""
//     for (let column = 0; column < size; column++) {
//         line += gate[row][column]
//     }
//     console.log(line)
// }