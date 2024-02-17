//Js
document.getElementById('uploadBtn').addEventListener('click', function() {
    const dataFile = document.getElementById('dataFile').files[0];
    const option1 = document.getElementById('option1').checked;
    const option2 = document.getElementById('option2').checked;

    const formData = new FormData();
    formData.append('file', dataFile);
    formData.append('option1', option1);
    formData.append('option2', option2);

    fetch('/api/uploadData', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Les données ont été chargées avec succès !');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Erreur lors du chargement des données.');
    });
});
