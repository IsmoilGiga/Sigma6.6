let body = document.querySelector("body");

fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        let results = data.results;
        let user = results[0];
            
        let box = document.createElement("div");
        let img = document.createElement("img");
        let ism = document.createElement("h2");
        let list = document.createElement("ul");
        let tel = document.createElement("li");
        let email = document.createElement("li")
        let address = document.createElement("li");

        img.src = user.picture.large;
        ism.textContent = `${user.name.first} ${user.name.last}`;
        tel.textContent = user.phone;
        email.textContent = user.email;
        address.textContent = user.location.country;

        box.classList.add("box");
        list.classList.add("card");

        list.appendChild(tel);
        list.appendChild(email);
        list.appendChild(address);

        box.appendChild(img);
        box.appendChild(ism);
        box.appendChild(list);

        body.appendChild(box);
    });