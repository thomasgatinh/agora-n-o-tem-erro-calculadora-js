function calcular() {
    const v1 = Number(document.querySelector("#velocidadeinicial1").value); // Velocidade inicial do objeto 1
    const v2 = Number(document.querySelector("#velocidadeinicial2").value); // Velocidade inicial do objeto 2
    const m1 = Number(document.querySelector("#massa1").value); // Massa do objeto 1
    const m2 = Number(document.querySelector("#massa2").value); // Massa do objeto 2

    // Fórmula para calcular a velocidade final em uma colisão inelástica
    const vf = (m1 * v1 + m2 * v2) / (m1 + m2);

    document.querySelector("#resultado").textContent = "Velocidade Final: " + vf.toFixed(2) + " m/s";
}

document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.querySelector("#calcular");
    calcularButton.addEventListener("click", calcular);
});
