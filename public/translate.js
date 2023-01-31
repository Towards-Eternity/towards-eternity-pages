let jsonData = [];

checkLanguage().then((lang) => {
  console.log("Selected Language", lang);
  translate(lang);
});

async function translate(lang) {
  console.info("Translating...", lang);
  const data = await jsonData[lang];

  // Foreach loop to translate
  Object.keys(data).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = data[key];
      console.log(key, data[key]);
    }
  });
  
  console.log(data);
}

/* ----------------------------------------- */
/* --------------- FUNCTIONS --------------- */
/* ----------------------------------------- */

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
