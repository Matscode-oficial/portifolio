document.addEventListener("DOMContentLoaded", function() {
    // Suponha que 'projetos' seja a lista de objetos com informações sobre os projetos
    const projetos = [
        {
            nome: 'Projeto 1',
            logo: 'caminho/para/logo1.jpg',
            stacks: 'caminho/para/stacks1.jpg',
            link: 'https://exemplo.com/projeto1'
        },
        {
            nome: 'Projeto 2',
            logo: 'caminho/para/logo2.jpg',
            stacks: 'caminho/para/stacks2.jpg',
            link: 'https://exemplo.com/projeto2'
        },
        // Adicione mais objetos conforme necessário
    ];

    // Selecione o elemento que irá conter os projetos
    const container = document.getElementById('projeto-container');

    // Percorra a lista de projetos
    projetos.forEach(projeto => {
        // Crie os elementos HTML para o projeto
        const projBox = document.createElement('div');
        projBox.classList.add('proj-boxes');

        const imgBox = document.createElement('div');
        imgBox.classList.add('img-box');

        const logoImg = document.createElement('img');
        logoImg.src = projeto.logo;
        logoImg.alt = 'Logo do projeto';

        const descBox = document.createElement('div');
        descBox.classList.add('desc-box');

        const nomeSite = document.createElement('h3');
        nomeSite.classList.add('nome-site');
        nomeSite.textContent = projeto.nome;

        const stacksImg = document.createElement('img');
        stacksImg.src = projeto.stacks;
        stacksImg.alt = 'Stacks utilizadas no projeto';

        const linkProjeto = document.createElement('a');
        linkProjeto.href = projeto.link;

        // Adicione os elementos ao documento HTML
        container.appendChild(projBox);
        projBox.appendChild(imgBox);
        imgBox.appendChild(logoImg);
        projBox.appendChild(descBox);
        descBox.appendChild(nomeSite);
        descBox.appendChild(stacksImg);
        descBox.appendChild(linkProjeto);
    });
});