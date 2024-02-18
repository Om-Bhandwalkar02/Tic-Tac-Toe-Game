let currentPlayer = 'X'
let gridBoxes = Array(9).fill(null)

const checkWinner = () => {
    if (
        (gridBoxes[0] !== null && gridBoxes[0] === gridBoxes[1] && gridBoxes[1] === gridBoxes[2]) ||
        (gridBoxes[3] !== null && gridBoxes[3] === gridBoxes[4] && gridBoxes[4] === gridBoxes[5]) ||
        (gridBoxes[6] !== null && gridBoxes[6] === gridBoxes[7] && gridBoxes[7] === gridBoxes[8]) ||

        (gridBoxes[0] !== null && gridBoxes[0] === gridBoxes[3] && gridBoxes[3] === gridBoxes[6]) ||
        (gridBoxes[1] !== null && gridBoxes[1] === gridBoxes[4] && gridBoxes[4] === gridBoxes[7]) ||
        (gridBoxes[2] !== null && gridBoxes[2] === gridBoxes[5] && gridBoxes[5] === gridBoxes[8]) ||

        (gridBoxes[0] !== null && gridBoxes[0] === gridBoxes[4] && gridBoxes[4] === gridBoxes[8]) ||
        (gridBoxes[2] !== null && gridBoxes[2] === gridBoxes[4] && gridBoxes[4] === gridBoxes[6])
    ){
        document.write(`Winner is ${currentPlayer}`)
    }

    if (!gridBoxes.some((e) => e === null))
        document.write(`Bhai koi bhi nahi jeeta, Draw hogya!!`)
    }
const handleClick = (el) => {
    const id = Number(el.id)
    if (gridBoxes[id] !== null) return
    gridBoxes[id] = currentPlayer
    el.innerText = currentPlayer
    checkWinner()
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}
