import zscoreValues from "./modules/zscoreValues";

// script.ts

// Função para calcular o Z-Score
function calculateZScore(rawScore: number, mean: number, stdDev: number, invert: boolean): number {
    const zScore = (rawScore - mean) / stdDev;
    return invert ? -zScore : zScore; // Retorna o Z-Score invertido se a checkbox estiver marcada
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event: Event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obtendo os valores dos inputs
    const rawScore = parseFloat((<HTMLInputElement>document.getElementById('raw-score')).value);
    const mean = parseFloat((<HTMLInputElement>document.getElementById('mean')).value);
    const stdDev = parseFloat((<HTMLInputElement>document.getElementById('std-dev')).value);
    const invertZScore = (<HTMLInputElement>document.getElementById('inverted')).checked;

    // Calculando o Z-Score
    const zScore = calculateZScore(rawScore, mean, stdDev, invertZScore);
    const percentil = zscoreValues.find((e) => e.zscore === zScore)?.percentil

    // Exibindo os resultados
    document.getElementById('zscore-result')!.textContent = `${zScore.toFixed(2)}`;
    document.getElementById('percentile-result')!.textContent = `${percentil}%`
    
}

// Adicionando o listener ao formulário
document.getElementById('zscore-form')!.addEventListener('submit', handleFormSubmit);
