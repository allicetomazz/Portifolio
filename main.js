document.addEventListener('DOMContentLoaded', function() {
    function getProjects() {
        const urlGitHub = 'https://api.github.com/users/allicetomazz/repos';
        var loadingElement = document.getElementById('carregando');
        var listElement = document.getElementById('projetos');

        if (!loadingElement) {
            console.error('Elemento com ID "carregando" não encontrado.');
            return;
        }

        if (!listElement) {
            console.error('Elemento com ID "projetos" não encontrado.');
            return;
        }

        fetch(urlGitHub, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('Resposta da API:', response);
            loadingElement.style.display = 'none';
            showProjects(response);
        })
        .catch((e) => {
            console.error('Erro ao buscar projetos:', e);
        });
    }

    function showProjects(data) {
        var listElement = document.getElementById('projetos');

        for (let i = 0; i < data.length; i++) {
            let a = document.createElement('a');
            a.href = data[i]['clone_url'];
            a.target = '_blank';
            a.title = data[i]['description'];
            let linkText = document.createTextNode(data[i]['name']);
            a.appendChild(linkText);
            listElement.appendChild(a);
        }
    }

    getProjects();
});