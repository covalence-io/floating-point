(function () {
    const op1El = <HTMLInputElement>document.getElementById('op1');
    const op2El = <HTMLInputElement>document.getElementById('op2');
    const answerEl = document.getElementById('answer') as HTMLInputElement;
    const checkBtn = document.getElementById('check');
    const resultEl = document.getElementById('result');

    if (!resultEl || !op1El || !op2El || !answerEl || !checkBtn) {
        console.log('Element not found :(');
        return;
    }

    checkBtn.addEventListener('click', () => {
        const op1 = new window.Decimal(op1El.value);
        const op2 = Number(op2El.value);
        const answer = Number(answerEl.value);
        const add = op1.add(op2);

        if (add.equals(answer)) {
            resultEl.textContent = `Correct! ${op1} + ${op2} does equal ${answer}`;
        } else {
            resultEl.textContent = `Incorrect! ${op1} + ${op2} actually equals ${add} not ${answer}`;
        }
    });
})();