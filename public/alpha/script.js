//NEW

// Check users language and set the language of the page with switch case
switch (navigator.language) {
  case "tr-TR":
    // Turkish
    break;
  case "en-US":
    // English
    break;
  case "ar":
    // Arabic
    break;
  default:
    // Turkish
    break;
}

/*
// If user use iOS device, replace the href of the link to the iOS app
if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
  document.querySelectorAll(".icon-mobileapp").forEach((item) => {
    item.classList.add("fa-brands", "fa-apple");
  });

  document.getElementById("link-kopgit").href =
    "https://apps.apple.com/tr/app/kopgit-risale-inur-e%C4%9Fitimi/id1534780135?l=tr";
  document.getElementById("link-lamelif").href =
    "https://apps.apple.com/tr/app/lamelif-kuran-ve-tecvid-e%C4%9Fitim/id1541395117?l=tr";
  document.getElementById("link-5te5namaz").href =
    "https://apps.apple.com/tr/app/5-te-5-namaz/id1602490524?l=tr";
  document.getElementById("link-medresem").href =
    "https://apps.apple.com/tr/app/medresem-i-slami-e%C4%9Fitim/id1541506836?l=tr";
  document.getElementById("link-pusulam").href =
    "https://apps.apple.com/tr/app/pusulam-s%C3%BCnneti-hayata-ge%C3%A7ir/id1542536987?l=tr";
} else if (navigator.userAgent.match(/Android/)) {
  document.querySelectorAll(".icon-mobileapp").forEach((item) => {
    item.classList.add("fa-brands", "fa-google-play");
  });

  document.getElementById("link-kopgit").href =
    "https://play.google.com/store/apps/details?id=com.kopgit.risaleinur";
  document.getElementById("link-lamelif").href =
    "https://play.google.com/store/apps/details?id=com.lamelif.kuran";
  document.getElementById("link-5te5namaz").href =
    "https://play.google.com/store/apps/details?id=com.sozlerkosku.beste5v2";
  document.getElementById("link-medresem").href =
    "https://play.google.com/store/apps/details?id=com.sozlerkosku.internals";
  document.getElementById("link-pusulam").href =
    "https://play.google.com/store/apps/details?id=com.sunnah.app";
} else {
  document.getElementById("mobileapps").style.display = "none";
}
*/

/**
 * getData function
 *
 * @param {string} url
 * @returns {array}
 * @description Get data from data.json file and return it as a array.
 * @example getData("data.json")
 */
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

/**
 * changeLanguage function
 *
 * @param {string} lang
 * @returns {void}
 * @description Change the language of the page with data.json's texts.
 * @example changeLanguage("tr-TR")
 */
async function changeLanguage(lang) {
  const links = document.getElementById("links");
  const data = await getData("data.json");

  data.forEach((item) => {
    console.info(item);

  });
}


/**
 * addLink function
 * @param {string} url
 * @param {string} text
 * @param {string} icon
 * 
 * @returns {void}
 * @description Add a link to the page.
 * @example addLink("https://example.com", "Example", "fa fa-link")
 */
function addLink(url, text, icon) {
  const links = document.getElementById("links");
  const link = document.createElement("a");

  link.href = url;
  link.target = "_blank";
  link.classList.add("link");

  link.innerHTML = `
    <i class="${icon}"></i>
    <span>${text}</span>
  `;
  links.appendChild(link);
}


/**
 * addSpace function
 * @param {number} space
 * 
 * @returns {void}
 * @description Add a space to the page.
 * @example addSpace(10)
 */
function addSpace(space = 10) {
  const links = document.getElementById("links");
  const br = document.createElement("br");

  br.style.height = `${space}px`;
  links.appendChild(br);
}


addLink("https://example.com", "Example", "fa fa-link");
addLink("https://example.com", "Example", "fa fa-link");
addSpace();

changeLanguage("tr-TR");
