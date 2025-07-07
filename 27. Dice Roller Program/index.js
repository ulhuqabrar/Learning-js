function rolldice(){

  const numofdice = document.getElementById("numofdice").value;
  const DiceResult = document.getElementById("DiceResult");
  const DiceImage = document.getElementById("DiceImage");
  const values = [];
  const Images = [];

  for (let i = 0; i < numofdice; i++){
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      Images.push(`<img src ="Dice/${value}.png" alt="Dice${value}">`);
  }

  DiceResult.textContent = `dice: ${values.join(`, `)}`;
  DiceImage.innerHTML = Images.join(``);
}