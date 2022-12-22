const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calc-keys");

keys.addEventListener("click", e =>{
    if (e.target.matches("button")) {
        //console.log("Hey");
        const key = e.target;
        const action = key.dataset.action;
        if (!action) {
            console.log("Number Key")
        }
        if (
            action === "add" || action === "subtract" || action === "multiply" || action === "divide"
        ) {
            console.log("Operator Key")
        }
        if (action === "decimal"){
            console.log("Decimal Key")
        }
        if (action === "clear"){
            console.log("clear key")
        }
        if (action === "calculate"){
            console.log("Calculate Key")
        }
    }
})

