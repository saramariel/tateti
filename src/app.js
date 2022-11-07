const board = document.getElementById("board")
const restartButton = document.getElementById("btnRestart")
let currentPlayer = 1
let movesPlayed = 0
let isGameStarted = true
let player1Wins =0
let player2Wins = 0

function setCells(board) {
    const cellQuantity = 9
    const cellContent = `
        <div class="main__cell">
            <p class= "main__cell--text"></p>
        </div>
    `
    let boardConstructor = ''
    for (let i = 1; i <= cellQuantity; i++) {
        boardConstructor += cellContent
    }

    board.innerHTML = boardConstructor
}

setCells(board)

function restartGame() {

    board.querySelectorAll('.main__cell').forEach(cell => cell.children[0].innerHTML='');
    movesPlayed = 0
    currentPlayer = 1
    isGameStarted = true
}

function checkMove(index, value) {
    const babybox = board.children

    //Check Row
    if (index >= 0 && index <= 2) {
        if (babybox[0].children[0].innerHTML === babybox[1].children[0].innerHTML &&
            babybox[1].children[0].innerHTML === babybox[2].children[0].innerHTML &&
            babybox[2].children[0].innerHTML === babybox[index].children[0].innerHTML) {
            isGameStarted = false
        }
    } else if (index >= 3 && index <= 5) {
        if (babybox[3].children[0].innerHTML === babybox[4].children[0].innerHTML &&
            babybox[4].children[0].innerHTML === babybox[5].children[0].innerHTML &&
            babybox[5].children[0].innerHTML === babybox[index].children[0].innerHTML) {
            isGameStarted = false
        }
    } else {
        if (babybox[6].children[0].innerHTML === babybox[7].children[0].innerHTML &&
            babybox[7].children[0].innerHTML === babybox[8].children[0].innerHTML &&
            babybox[8].children[0].innerHTML === babybox[index].children[0].innerHTML) {
            isGameStarted = false
        }
    }

    //Check Column
    if (babybox[0].children[0].innerHTML === babybox[3].children[0].innerHTML &&
        babybox[3].children[0].innerHTML === babybox[6].children[0].innerHTML &&
        babybox[6].children[0].innerHTML === babybox[index].children[0].innerHTML) {
        isGameStarted = false
    } else if (babybox[1].children[0].innerHTML === babybox[4].children[0].innerHTML &&
        babybox[4].children[0].innerHTML === babybox[7].children[0].innerHTML &&
        babybox[7].children[0].innerHTML === babybox[index].children[0].innerHTML) {
        isGameStarted = false
    } else if (babybox[2].children[0].innerHTML === babybox[5].children[0].innerHTML &&
        babybox[5].children[0].innerHTML === babybox[8].children[0].innerHTML &&
        babybox[8].children[0].innerHTML === babybox[index].children[0].innerHTML) {
        isGameStarted = false
    }

    //Check Diagonal
    if (babybox[0].children[0].innerHTML === babybox[4].children[0].innerHTML &&
        babybox[4].children[0].innerHTML === babybox[8].children[0].innerHTML &&
        babybox[8].children[0].innerHTML === babybox[index].children[0].innerHTML) {
        isGameStarted = false
    } else if (babybox[2].children[0].innerHTML === babybox[4].children[0].innerHTML &&
        babybox[4].children[0].innerHTML === babybox[6].children[0].innerHTML &&
        babybox[6].children[0].innerHTML === babybox[index].children[0].innerHTML) {
        isGameStarted = false
    }

    if (!isGameStarted) {
        swal({ title: `Ganó el jugador ${currentPlayer}`, icon: "success" })
    } else if (currentPlayer === 1) {
        currentPlayer++
        player1Wins++
    } else if (currentPlayer === 2) {
        currentPlayer--
        player2Wins++
    }
}

function playerClick(cell, index) {
    let value = cell.children[0].innerHTML
    if (isGameStarted && value === "") {
        movesPlayed++
        if (currentPlayer === 1) {
            cell.children[0].innerHTML = 'X'
            checkMove(index, "X")
        } else if (currentPlayer === 2) {
            cell.children[0].innerHTML = 'O'
            checkMove(index, "X")
        }

        if (movesPlayed === 9 && isGameStarted) {
            swal({ title: "Empate", icon: "success" })
            isGameStarted = false
        }
    }
}

function setEventListeners(board) {

    for (let i = 0; i < board.children.length; i++) {
        let cell = board.children[i]
        cell.addEventListener('click', function () {
            playerClick(this, i)
        })
    }
    restartButton.addEventListener('click', function () {
        restartGame()
    })
}

setEventListeners(board)

function setCellStyles() {
    const borderSize = 7
    let borderStyle1 = `border-width: 0 ${borderSize}px ${borderSize}px 0`
    let borderStyle2 = `border-width: 0 0 ${borderSize}px 0`
    let borderStyle3 = `border-width: 0 ${borderSize}px 0 0`


    for (let i = 0; i < board.children.length; i++) {
        switch (i) {
            case 0:
                board.children[i].style = borderStyle1
                break
            case 1:
                board.children[i].style = borderStyle1
                break
            case 2:
                board.children[i].style = borderStyle2
                break
            case 3:
                board.children[i].style = borderStyle1
                break
            case 4:
                board.children[i].style = borderStyle1
                break
            case 5:
                board.children[i].style = borderStyle2
                break
            case 6:
                board.children[i].style = borderStyle3
                break
            case 7:
                board.children[i].style = borderStyle3
                break
        }
    }
}

setCellStyles()