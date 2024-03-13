class Album {
    constructor(name, cover, description) {
        this.name = name;
        this.cover = cover;
        this.description = description;
    }

    display(containerId) {
        const container = document.getElementById(containerId);
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');

        const albumTitle = document.createElement('h2');
        albumTitle.textContent = this.name;
        albumDiv.appendChild(albumTitle);

        const coverImg = document.createElement('img');
        coverImg.src = this.cover;
        coverImg.alt = 'Album Cover';
        albumDiv.appendChild(coverImg);

        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = this.description;
        albumDiv.appendChild(descriptionPara);

        container.appendChild(albumDiv);
    }
}

export default Album;
