fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("name").textContent = data.name;
        document.getElementById("bio").textContent = data.bio;
        document.getElementById("profile-img").src = data.profileImage;

        let linksContainer = document.getElementById("links");
        data.links.forEach(link => {
            let a = document.createElement("a");
            a.href = link.url;
            a.textContent = link.title;
            a.target = "_blank";
            linksContainer.appendChild(a);
        });
    })
    .catch(error => console.error('Gagal mengambil data:', error));