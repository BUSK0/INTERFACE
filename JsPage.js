
document.addEventListener('DOMContentLoaded', function() {
    const modelSelector = document.getElementById('modelSelector');
    const downloadBtn = document.getElementById('downloadBtn');

    // Charger la liste des modèles disponibles
    fetch('/api/models')
        .then(response => response.json())
        .then(models => {
            models.forEach(model => {
                const option = document.createElement('option');
                option.value = model.id;
                option.textContent = model.name;
                modelSelector.appendChild(option);
            });
        });

    // Gestionnaire de clic pour le bouton de téléchargement
    downloadBtn.addEventListener('click', function() {
        const selectedModelId = modelSelector.value;
        fetch(`/api/download/${selectedModelId}`)
            .then(response => {
                response.blob().then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `model-${selectedModelId}.zip`; // Nom du fichier à télécharger
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                });
            });
    });
});
