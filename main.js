const apiUrl ='https://sheet.best/api/sheets/b49040e2-472d-4117-b33c-cb98fbb8d6cb';

// captura formulario
const form = document.getElementById('crudform');
const dataTable = document.getElementById('dataTable');

///consumir API READ

const getData =async () => {
    try {
        const response = await axios.get(apiUrl);
        renderTable(response.data);
    } catch (error) {
        console.error('error al obtener los datos', error)
    }

}
const  renderTable = (data) => {
    console.log(data);
}
getData 