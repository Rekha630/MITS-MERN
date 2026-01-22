<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Rock Paper Scissors</h1>
    body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f2f2f2;
}

h1 {
    margin-top: 40px;
}

.buttons {
    margin: 30px;
}

button {
    padding: 15px 25px;
    font-size: 18px;
    margin: 10px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    background-color: #4CAF50;
    color: white;
}

button:hover {
    background-color: #45a049;
}

.result {
    margin-top: 30px;
}


    <div class="buttons">
        <button onclick="playGame('rock')">✊ Rock</button>
        <button onclick="playGame('paper')">✋ Paper</button>
        <button onclick="playGame('scissors')">✌ Scissors</button>
    </div>

    <div class="result">
        <p id="userChoice"></p>
        <p id="computerChoice"></p>
        <h2 id="winner"></h2>
    </div>

    <script src="script.js"></script>
</body>
</html>
