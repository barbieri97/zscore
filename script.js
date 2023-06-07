function calculateZScoreAndPercentile() {
    var experimentalValue = parseFloat(document.getElementById('experimentalValue').value);
    var mean = parseFloat(document.getElementById('mean').value);
    var standardDeviation = parseFloat(document.getElementById('standardDeviation').value);
  
    var zScore = (experimentalValue - mean) / standardDeviation;
    // var zScore = (mean - experimentalValue) / standardDeviation;
    var percentile = zScoreToPercentile(zScore);
  
    document.getElementById('zScore').innerHTML = "Z-score: " + zScore.toFixed(2);
    document.getElementById('percentile').innerHTML = "Percentil: " + percentile.toFixed(2) + "%";
  }

  function calculateZScoreAndPercentileInvert() {
    var experimentalValue = parseFloat(document.getElementById('experimentalValue').value);
    var mean = parseFloat(document.getElementById('mean').value);
    var standardDeviation = parseFloat(document.getElementById('standardDeviation').value);
  
    // var zScore = (experimentalValue - mean) / standardDeviation;
    var zScore = (mean - experimentalValue) / standardDeviation;
    var percentile = zScoreToPercentile(zScore);
  
    document.getElementById('zScore').innerHTML = "Z-score: " + zScore.toFixed(2);
    document.getElementById('percentile').innerHTML = "Percentil: " + percentile.toFixed(2) + "%";
  }


  function erf(x) {
    // Aproximação da função de erro usando a fórmula de Abramowitz and Stegun
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var p  =  0.3275911;
  
    var sign = (x >= 0) ? 1 : -1;
    x = Math.abs(x);
  
    var t = 1.0 / (1.0 + p * x);
    var y = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t;
  
    return sign * (1 - y * Math.exp(-x * x));
  }
  
  function zScoreToPercentile(zScore) {
    var percentile = (1 + erf(zScore / Math.sqrt(2))) / 2;
    return percentile * 100;
  }
  
  