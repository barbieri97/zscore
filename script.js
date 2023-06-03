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

  function zScoreToPercentile(zScore) {
    // Tabela de distribuição normal padrão
    var table = {
      "-3.4": 0.0003,
      "-3.3": 0.0005,
      "-3.2": 0.0007,
      "-3.1": 0.0010,
      "-3.0": 0.0013,
      "-2.9": 0.0019,
      "-2.8": 0.0026,
      "-2.7": 0.0035,
      "-2.6": 0.0047,
      "-2.5": 0.0062,
      "-2.4": 0.0082,
      "-2.3": 0.0107,
      "-2.2": 0.0139,
      "-2.1": 0.0179,
      "-2.0": 0.0228,
      "-1.9": 0.0287,
      "-1.8": 0.0359,
      "-1.7": 0.0446,
      "-1.6": 0.0548,
      "-1.5": 0.0668,
      "-1.4": 0.0808,
      "-1.3": 0.0968,
      "-1.2": 0.1151,
      "-1.1": 0.1357,
      "-1.0": 0.1587,
      "-0.9": 0.1841,
      "-0.8": 0.2119,
      "-0.7": 0.2420,
      "-0.6": 0.2743,
      "-0.5": 0.3085,
      "-0.4": 0.3446,
      "-0.3": 0.3821,
      "-0.2": 0.4207,
      "-0.1": 0.4602,
      "0.0": 0.5000,
      "0.1": 0.5398,
      "0.2": 0.5793,
      "0.3": 0.6179,
      "0.4": 0.6554,
      "0.5": 0.6915,
      "0.6": 0.7257,
      "0.7": 0.7580,
      "0.8": 0.7881,
      "0.9": 0.8159,
      "1.0": 0.8413,
      "1.1": 0.8643,
      "1.2": 0.8849,
      "1.3": 0.9032,
      "1.4": 0.9192,
      "1.5": 0.9332,
      "1.6": 0.9452,
      "1.7": 0.9554,
      "1.8": 0.9641,
      "1.9": 0.9713,
      "2.0": 0.9772,
      "2.1": 0.9821,
      "2.2": 0.9861,
      "2.3": 0.9893,
      "2.4": 0.9918,
      "2.5": 0.9938,
      "2.6": 0.9953,
    }
    
  
    var absZScore = Math.abs(zScore);
    var integerPart = Math.floor(absZScore);
    var decimalPart = absZScore - integerPart;
  
    var lowerBound = integerPart.toFixed(1);
    var upperBound = (integerPart + 0.1).toFixed(1);
  
    var lowerPercentile = table[lowerBound];
    var upperPercentile = table[upperBound];
  
    if (lowerPercentile === undefined || upperPercentile === undefined) {
      return null; // Valor fora da faixa da tabela
    }
  
    var percentile;
    if (zScore >= 0) {
      percentile = lowerPercentile + decimalPart * (upperPercentile - lowerPercentile);
    } else {
      percentile = 1 - (lowerPercentile + decimalPart * (upperPercentile - lowerPercentile));
    }
  
    return percentile * 100;
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

  function zScoreToPercentile(zScore) {
    // Tabela de distribuição normal padrão
    var table = {
      "-3.4": 0.0003,
      "-3.3": 0.0005,
      "-3.2": 0.0007,
      "-3.1": 0.0010,
      "-3.0": 0.0013,
      "-2.9": 0.0019,
      "-2.8": 0.0026,
      "-2.7": 0.0035,
      "-2.6": 0.0047,
      "-2.5": 0.0062,
      "-2.4": 0.0082,
      "-2.3": 0.0107,
      "-2.2": 0.0139,
      "-2.1": 0.0179,
      "-2.0": 0.0228,
      "-1.9": 0.0287,
      "-1.8": 0.0359,
      "-1.7": 0.0446,
      "-1.6": 0.0548,
      "-1.5": 0.0668,
      "-1.4": 0.0808,
      "-1.3": 0.0968,
      "-1.2": 0.1151,
      "-1.1": 0.1357,
      "-1.0": 0.1587,
      "-0.9": 0.1841,
      "-0.8": 0.2119,
      "-0.7": 0.2420,
      "-0.6": 0.2743,
      "-0.5": 0.3085,
      "-0.4": 0.3446,
      "-0.3": 0.3821,
      "-0.2": 0.4207,
      "-0.1": 0.4602,
      "0.0": 0.5000,
      "0.1": 0.5398,
      "0.2": 0.5793,
      "0.3": 0.6179,
      "0.4": 0.6554,
      "0.5": 0.6915,
      "0.6": 0.7257,
      "0.7": 0.7580,
      "0.8": 0.7881,
      "0.9": 0.8159,
      "1.0": 0.8413,
      "1.1": 0.8643,
      "1.2": 0.8849,
      "1.3": 0.9032,
      "1.4": 0.9192,
      "1.5": 0.9332,
      "1.6": 0.9452,
      "1.7": 0.9554,
      "1.8": 0.9641,
      "1.9": 0.9713,
      "2.0": 0.9772,
      "2.1": 0.9821,
      "2.2": 0.9861,
      "2.3": 0.9893,
      "2.4": 0.9918,
      "2.5": 0.9938,
      "2.6": 0.9953,
    }
    
  
    var absZScore = Math.abs(zScore);
    var integerPart = Math.floor(absZScore);
    var decimalPart = absZScore - integerPart;
  
    var lowerBound = integerPart.toFixed(1);
    var upperBound = (integerPart + 0.1).toFixed(1);
  
    var lowerPercentile = table[lowerBound];
    var upperPercentile = table[upperBound];
  
    if (lowerPercentile === undefined || upperPercentile === undefined) {
      return null; // Valor fora da faixa da tabela
    }
  
    var percentile;
    if (zScore >= 0) {
      percentile = lowerPercentile + decimalPart * (upperPercentile - lowerPercentile);
    } else {
      percentile = 1 - (lowerPercentile + decimalPart * (upperPercentile - lowerPercentile));
    }
  
    return percentile * 100;
  }
  
  