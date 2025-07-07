// Ternary Operator - shortcut to if{} statements that helps to assign variables based on condition
// Ternary Operator includes - condition ? exprIfTrue : exprIfFalse


    let age = 44;
    let message = age >= 18 ? "You are an adult" : "You are a minor";

    console.log(message);


    let time = 1;
    let text = time > 12 ? "Good Afternoon" : "Good Morning";

    console.log(text);

    let purchaseAmount = 110;
    let discount = purchaseAmount >= 100 ? 10 : 0;
    console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);
    