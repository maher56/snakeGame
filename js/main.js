const snakeSpeed = 7;
const snakeBody = [{x : 10 ,y:10}];
const gameBoard = document.querySelector(".board")
let lastRenderTime = 0
let gameOver = false
let food = newPosition();
let growRate = 1;
let inputDirection = { x: 0 , y:0}
let prevDirection = {x: 0 , y: 0}
let newSegments = 0;
let button = document.createElement("button");
button.textContent = "ad";
function main(currentTime) {
    if(snakeIntersection()) {
        if(alert(button))
            window.location.reload()
        return
    }
    window.requestAnimationFrame(main)
    if((currentTime - lastRenderTime) / 1000 < 1 / snakeSpeed)return 
    lastRenderTime = currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
}
function draw() {
    gameBoard.innerHTML = ""
    drawSanke(gameBoard)
    drawFood(gameBoard)
}



function updateSnake() {
    addSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2 ; i >= 0 ; i--) {
        snakeBody[i + 1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
    
    if(snakeBody[0].x == 20)snakeBody[0].x = 1;
    else if(snakeBody[0].x == 0)snakeBody[0].x = 19;
    if(snakeBody[0].y == 20)snakeBody[0].y = 1;
    else if(snakeBody[0].y == 0)snakeBody[0].y = 19;
}

function addSegments() {
    for(let i = 0 ; i < newSegments ; i++)
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    newSegments = 0;
}

function getInputDirection() {
    return inputDirection
}


function drawSanke(gameboard) {
    snakeBody.forEach(ele => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = ele.y;
        snakeElement.style.gridColumnStart = ele.x;
        snakeElement.classList.add("snake");
        gameboard.appendChild(snakeElement);
    })
}
function drawFood(gameboard) {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameboard.appendChild(foodElement);
}


window.addEventListener("keydown" , e => {
    switch (e.key) {
        case "ArrowUp":
        case "w":
            if(prevDirection.y !== 0)return;
            inputDirection = { x: 0 , y: -1}
            break
        case "ArrowDown":
        case "s":
        case "S":
            if(prevDirection.y !== 0)return;
            inputDirection = { x: 0 , y: 1}
            break
        case "ArrowRight":
        case "d":
        case "D":
            if(prevDirection.x !== 0)return;
            inputDirection = { x: 1 , y: 0}
            break
        case "ArrowLeft":
        case "a":
        case "A":
            if(prevDirection.x !== 0)return;
            inputDirection = { x: -1 , y: 0}
            break
    }
    prevDirection = inputDirection;
})


function updateFood() {
    if(onSnake(food)){
        newSegments += growRate;
        food = newPosition();
    }
}

function onSnake(food , {ignoreHead = false} = {}) {
    return snakeBody.some((ele , index) =>{
        if(ignoreHead && index === 0)return false
        return ele.x === food.x && ele.y === food.y
    })
}

function newPosition() {
    let newFood = {x: 2 , y: 2}
    while(typeof newFood == null || onSnake(newFood))
        newFood = {
            x: Math.floor(Math.random() * 19) + 1,
            y: Math.floor(Math.random() * 19) + 1
        }
    return newFood;
}

function snakeIntersection() {
    return onSnake(snakeBody[0] , {ignoreHead: true})
}