function getClassification(percentile) {
    if (percentile >= 0 && percentile <= 10) {
      return "Muito Inferior";
    } else if (percentile < 30) {
      return "Inferior";
    } else if (percentile < 40) {
      return "Média Inferior";
    } else if (percentile < 59) {
      return "Média";
    } else if (percentile < 74) {
      return "Média Superior";
    } else if (percentile < 89) {
      return "Superior";
    } else if (percentile < 100) {
      return "Muito Superior";
    }
  }
  
  // Atualiza a tabela com classificações
var table = document.querySelector("table");
var rows = table.querySelectorAll('tr')

for (var i = 1; i < rows.length; i++) {
    var cell = document.createElement('td')
    var percentileCell = rows[i].querySelector('td:nth-child(2)')
    // console.log(percentileCell)
    var classificacao = getClassification(parseFloat(percentileCell.textContent))
    console.log()
    cell.innerHTML = classificacao
    rows[i].appendChild(cell)
}

  