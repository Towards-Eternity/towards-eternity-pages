let jsonData = [];

checkLanguage().then((lang) => {
  showPage(lang);
});

async function showPage(lang) {
  const data = jsonData[lang];
  const deviceType = checkDeviceType();

  // Foreach loop to showPage
  Object.keys(data).forEach((key) => {
    // Add profile picture
    if (key === "profilePicture") {
      // Create a new <span> element and set the id to "profilePicture"
      // and add profilePicture image in it
      const span = document.createElement("span");
      span.id = "profilePicture";

      // Create a new <img> element and set the src attribute
      const img = document.createElement("img");
      img.src = data[key];

      // Add the img to the span
      span.append(img);

      // Add the span to the header section
      document.getElementById("header").prepend(span);
    }

    // Add title
    if (key === "title") {
      // Create a new <h1> element and set the id to "title"
      const title = document.createElement("h1");
      title.id = "title";
      title.textContent = data[key];

      // Add the title to the header section
      document.getElementById("header").append(title);
    }

    // Add hashtag
    if (key === "hashtag") {
      // Create a new <span> element and set the id to "hashtag"
      const span = document.createElement("span");
      span.id = "hashtag";
      span.textContent = data[key];

      // Add the span to the footer section
      document.getElementById("footer").append(span);
    }

    // Add links
    if (key === "linkSection") {
      // Create a new <div> element and set the id to "linkSection"
      const div = document.createElement("div");
      div.id = "linkSection";
      div.style.marginBottom = "40px";

      // Add the div to the body section
      document.getElementById("body").append(div);

      Object.keys(data[key]).forEach((item) => {
        const itemData = data[key][item];

        // Create a new <a> element
        const link = document.createElement("a");

        // Set the href attribute
        link.href = itemData.url;

        // Set the text content
        link.textContent = itemData.title;

        // Add link class
        link.classList.add("item");

        // Add target attribute
        link.setAttribute("target", "_blank");

        // Add icon to the texts left
        const icon = document.createElement("i");
        icon.classList.add("fab", itemData.icon);
        link.prepend(icon);

        // Add the link to the linkSection div to append
        document.getElementById("linkSection").append(link);
      });
    }

    // If device not desktop,
    // add mobile apps
    if (deviceType !== "Desktop" && key === "appSection") {
      // Create a new <div> element and set the id to "appSection"
      const div = document.createElement("div");
      div.id = "appSection";
      div.style.marginBottom = "40px";

      // Add the div to the body section
      document.getElementById("body").append(div);

      // Foreach loop to add mobile apps
      Object.keys(data[key].apps).forEach((item) => {
        const itemData = data[key].apps[item];

        // Create a new <a> element
        const link = document.createElement("a");

        // Set the text content
        link.innerHTML =
          itemData.title + "<br><small>" + itemData.subtitle + "</small>";

        // Add link class
        link.classList.add("item");

        // Add url, if the device is iOS, add iOS url.
        // If the device is Android, add Android url.
        if (deviceType === "iOS") {
          link.setAttribute("href", itemData.iosURL);
        } else {
          link.setAttribute("href", itemData.androidURL);
        }

        // Add target attribute
        link.setAttribute("target", "_blank");

        // Add store icon to the link
        link.prepend(getStoreIcon(deviceType));

        // Add the link to the links div to append
        document.getElementById("appSection").append(link);
      });

      // Add description
      if (data[key].description) {
        // Create a new <p> element and set the id to "appDescription"
        const p = document.createElement("p");
        p.id = "appDescription";
        p.innerHTML = data[key].description;
        p.classList.add("item");

        // Add the p to the appSection div to append
        document.getElementById("appSection").append(p);
      }
    }

    // Add About Us link and description
    if (key === "aboutUs") {
      const itemData = data[key];

      // Add span to the body section with itemData.title
      const span = document.createElement("span");
      span.id = "aboutUsBtn";
      span.textContent = itemData.title;
      span.classList.add("item");
      span.style.cursor = "pointer";
      document.getElementById("body").append(span);
      // If the span is clicked, show the description
      span.addEventListener("click", () => {
        const p = document.getElementById("aboutUsDescription");
        if (p.style.display === "none") {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });

      // Add p to the body section with itemData.description
      const p = document.createElement("p");
      p.id = "aboutUsDescription";
      p.innerHTML = itemData.text;
      p.style.display = "none";
      p.classList.add("item");
      document.getElementById("body").append(p);
    }
  });
}

/* ----------------------------------------- */
/* --------------- FUNCTIONS --------------- */
/* ----------------------------------------- */

/** Check Device Type
 * Check if the device is a mobile device.
 * Return Android or iOS if it is a mobile device.
 * Return Desktop if it is not a mobile device.
 *
 * @returns {string} deviceType
 */
function checkDeviceType() {
  const ua = navigator.userAgent;
  let deviceType = "Desktop";

  // If Android or XiaoMi return Android
  if (/Android|XiaoMi/i.test(ua)) {
    deviceType = "Android";
  }

  // If iOS, iPad or iPod return iOS
  if (/iPhone|iPad|iPod/i.test(ua)) {
    deviceType = "iOS";
  }

  return deviceType;
}

/** Read data.json File
 * Read data.json file.
 * Store the data in a variable.
 * Return the data.
 */
async function readData() {
  const response = await fetch("data.json");
  const data = await response.json();
  jsonData = data;
  return data;
}

/** Get Language Options
 * Get the language options from the jsonData.
 * Add the language options to the userLang.
 */
async function languageOptions() {
  let langOpt = [];
  const data = await readData();

  // For loop to get json headers
  for (let i = 0; i < Object.keys(data).length; i++) {
    langOpt.push(Object.keys(data)[i]);
  }

  return langOpt;
}

/** Check Language Data For User Language
 * Check if the user language is in the data.json file.
 */
async function checkLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  const langOpt = await languageOptions();
  let data = "tr";

  langOpt.forEach((lang) => {
    if (userLang.includes(lang)) {
      data = lang;
    }
  });

  return data;
}

/** Icon Function
 * If parameter is iOS, return iOS icon.
 * If parameter is Android, return Android icon.
 * Return <i> element.
 *
 * @param {string} deviceType
 * @returns {HTMLElement} icon
 */
function getStoreIcon(deviceType) {
  const icon = document.createElement("i");

  if (deviceType === "iOS") {
    icon.classList.add("fa-brands", "fa-apple");
  } else {
    icon.classList.add("fa-brands", "fa-google-play");
  }

  return icon;
}
