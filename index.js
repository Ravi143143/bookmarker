let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");

siteUrlInput.addEventListener("change", (event) => {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});
siteNameInput.addEventListener("change", (event) => {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});


function Validation() {
    if (siteNameInput.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
    if (siteUrlInput.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
}

function appendItem(item) {

    let listEl = document.createElement("li");
    // <li></li>
    listEl.style.listStyleType = "none";
    listEl.classList.add("d-flex", "flex-row", "p-2", "mt-2");
    listEl.id = item.bookmarkId;
    // <li class="d-flex flex-row p-2 mt-2" id="bookmarkId3"></li>
    bookmarksList.appendChild(listEl);
    //<ul>
    //<li class="d-flex flex-row p-2 mt-2" id="bookmarkId3"></li>
    //<li class="d-flex flex-row p-2 mt-2" id="bookmarkId4"></li>
    //<li class="d-flex flex-row p-2 mt-2" id="bookmarkId5"></li>
    //</ul>


    let textEl = document.createElement("p");
    textEl.classList.add("pt-2", "mr-4");
    textEl.textContent = item.name;
    listEl.appendChild(textEl);
    let buttoncontainerEl = document.createElement("div");

    listEl.appendChild(buttoncontainerEl);

    let linkEl = document.createElement("a");
    linkEl.href = item.url;
    linkEl.target = "_blank";
    // <a href="ddf.dfd" target="_blank">Visit</a>
    buttoncontainerEl.appendChild(linkEl);

    let buttonEl = document.createElement("button");
    buttonEl.classList.add("btn", "btn-primary");
    buttonEl.textContent = "Visit";
    linkEl.appendChild(buttonEl);
}

function createItem() {

    if (siteNameInput.value !== "" && siteUrlInput.value !== "") {
        siteNameErrMsg.textContent = "";
        let bookmarkId = "bookmarkId" + (bookmarks.length + 1);
        let name = siteNameInput.value;
        let url = siteUrlInput.value;

        let item = {
            bookmarkId: bookmarkId,
            name: name,
            url: url
        }
        appendItem(item);
    }
}

appendItem(bookmarks[0]);
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    Validation();
    createItem();
});