const url = "https://ntfy.barbiericlinica.com.br/siteclinica"

const data = "New access to zscore page!"

const options = {
    method: 'POST',
    headers: {'t': 'new access to zscore.barbiericlinica.com.br'},
    body: data,
}

fetch(url, options).then(response => {
    if (!response.ok) {
        throw new Error('Request response is not ok')
    }
}).catch(error => {
    console.error('Error: ', error)
})