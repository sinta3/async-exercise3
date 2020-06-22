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
        //name dan id
        let name = document.createElement("h4");
        name.innerHTML = ` ${results.login}</br> ${results.id}`;
        profil.appendChild(name);

        //follower & following
        let follower = document.getElementById("follower");
        let following = document.getElementById("following");

        follower.innerHTML = `<a href="${results.followers_url}">Followers : ${results.followers}</a>`;
        following.innerHTML = `<a href="${results.following_url}">Following : ${results.following}</a>`;

        //repo
        let repos = document.getElementById("repos");
        repos.innerHTML = `<a href="${results.repos_url}">Repository : ${results.public_repos}</a>`;
        //blog
        let blog = document.getElementById("blog");
        blog.innerHTML = `<a href="${results.blog}">My Blog </a>`;
        //twitter
        let twit = document.getElementById("twit");
        twit.innerHTML = `<a href="${results.twitter_username}">My Twitter</a>`;
        //bio
        let bio = document.getElementById("bio");
        bio.innerHTML = `${results.bio}`;
        //lokasi
        let locate = document.getElementById("locate");
        let loc = document.createElement("p");
        loc.innerHTML = ` Address : ${results.location}`;
        locate.appendChild(loc);
    } catch (error) {
        console.log(error);
    }
}

gitUser();
