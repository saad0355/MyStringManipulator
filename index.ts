
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");

let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("operation");

let KlikButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("KlikButton");
KlikButton.addEventListener("click", klik);

let resultElement: HTMLDivElement = <HTMLDivElement> document.getElementById("result");

function klik(): void {
    console.log("test");
    let str : string = inputElement.value;
    let op : string = operationElement.value;
    let result: string = "nothing";
    switch (op){
        case "upper": result = str.toUpperCase(); break;
        case "lower": result = str.toLowerCase(); break; 
      }
      resultElement.innerHTML = result;
      }
