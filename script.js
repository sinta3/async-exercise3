let endpoint = `https://api.github.com/users/sinta3`;
let options = {
    method: "GET",
};
let profil = document.getElementById("profil");

async function gitUser() {
    try {
        let response = await fetch(endpoint, options);
        let results = await response.json();
        console.log(results);
        //img profil
        let img = document.createElement("img");
        img.setAttribute("src", `${results.avatar_url}`);
        profil.appendChild(img);
    } catch (error) {
        console.log(error);
    }
}

gitUser();
