window.onload = expandTitles;
function expandTitles() {
    let h1s = document.getElementsByTagName("h1");
    for(let i = 0; i < h1s.length; ++i) {
        let h1 = h1s[i];
        let c = h1.textContent;
        h1.textContent = "";
        for(let j = 0; j < c.length; ++j) {
            let p = document.createElement("span");
            p.textContent = c[j];
            h1.appendChild(p);
        }
    }
}
