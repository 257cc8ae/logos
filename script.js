var imgs = [
    { class: "anyfre", name: "anyfre-color.png" },
    { class: "anyfre", name: "anyfre-color.svg" },
    { class: "anyfre", name: "anyfre-text-dark.svg" },
    { class: "anyfre", name: "anyfre-text-white.svg" },
    { class: "recood", name: "recood.png" },
    { class: "recood", name: "recood.svg" },
    { class: "recood", name: "Recood-text-white.svg" },
    { class: "recood", name: "recood-text-dark.svg" },
    
]

for (var i = 0; i < imgs.length; i++) {
    var img_area = document.createElement("div");
    img_area.setAttribute("class", "img-area");
    img_area.setAttribute("id", `img-area${i}`)
    document.getElementById(imgs[i].class).appendChild(img_area);
    var img_area = document.getElementById(`img-area${i}`)
    var img = document.createElement("img");
    img.setAttribute("src", `https://anyfre.github.io/logos/${imgs[i].name}`)
    img_area.appendChild(img);
    var leftside = document.createElement("div");
    leftside.setAttribute("id", `leftside${i}`);
    leftside.setAttribute("class", `leftside`);
    leftside.setAttribute("style", `width:calc(100% - ${document.querySelector("#img-area" + String(i) + " img").clientWidth}px - 20px)`)
    img_area.appendChild(leftside)
    var leftside = document.getElementById(`leftside${i}`)
    var title = document.createElement("p");
    title.innerText = imgs[i].name;
    leftside.appendChild(title);
    var url = document.createElement("input")
    url.setAttribute("type", "text");
    url.setAttribute("id", `url${i}`);
    url.setAttribute("class","url")
    url.value = `https://anyfre.github.io/logos/${imgs[i].name}`;
    leftside.appendChild(url)
    var button = document.createElement("button");
    button.setAttribute("class", "copybtn");
    button.setAttribute("id", `copybtn${i}`);
    button.innerText = "COPY URL";
    leftside.appendChild(button);
    document.getElementById(`copybtn${i}`).addEventListener("click", function () {
        var copyTarget = document.querySelector(`#url${i -1}`);
        copyTarget.select();
        document.execCommand("Copy");
        alert("Copied")
    })
}