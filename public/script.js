const apps = {
  // Array of apps to be added to the page
  kopgitApp: {
    ios: "https://apps.apple.com/tr/app/kopgit-risale-inur-e%C4%9Fitimi/id1534780135?l=tr",
    android:
      "https://play.google.com/store/apps/details?id=com.kopgit.risaleinur",
  },
  lamelifApp: {
    ios: "https://apps.apple.com/tr/app/lamelif-kuran-ve-tecvid-e%C4%9Fitim/id1541395117?l=tr",
    android: "https://play.google.com/store/apps/details?id=com.lamelif.kuran",
  },
  namazApp: {
    ios: "https://apps.apple.com/tr/app/5-te-5-namaz/id1602490524?l=tr",
    android:
      "https://play.google.com/store/apps/details?id=com.sozlerkosku.beste5v2",
  },
  pusulamApp: {
    ios: "https://apps.apple.com/tr/app/pusulam-s%C3%BCnneti-hayata-ge%C3%A7ir/id1542536987?l=tr",
    android: "https://play.google.com/store/apps/details?id=com.sunnah.app",
  },
  medresemApp: {
    ios: "https://apps.apple.com/tr/app/medresem-i-slami-e%C4%9Fitim/id1541506836?l=tr",
    android:
      "https://play.google.com/store/apps/details?id=com.sozlerkosku.internals",
  },
};

// Get appSection
const appSection = document.getElementById("appSection");

// Get appSection's links
const appSectionLinks = document.querySelectorAll("#appSection a");

// Get the device type function
const getDeviceType = () => {
  // Get the user agent
  const userAgent = navigator.userAgent.toLowerCase() || window.opera.toLowerCase();

  alert("Your useragent" + userAgent)

  // If the userAgent includes "Android" or "Xiaomi" or "MIUI" return "Android"
  if (
    userAgent.includes("android") ||
    userAgent.includes("xiaomi") ||
    userAgent.includes("miuibrowser")
  ) {
    return "android";
  }

  // If the userAgent includes "Windows" or "Macintosh" or "Linux" return "Desktop"
  if (
    userAgent.includes("windows") ||
    userAgent.includes("macintosh")
    //userAgent.includes("linux")
  ) {
    return "desktop";
  }

  // If the userAgent includes "iPhone" or "iPad" or "iPod" return "iOS"
  if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod")
  ) {
    return "ios";
  }
};

// Add link function with id parameter
const addLink = (id, os) => {
  const app = apps[id]; // Get the app data
  const link = document.getElementById(id); // Get the link

  // Change the link's href attribute
  link.href = app[os];
};

// Add icon function with id parameter
const addIcon = (id, os) => {
  const app = apps[id]; // Get the app data
  const link = document.getElementById(id); // Get the link

  // Create the icon element with os store icon
  const icon = document.createElement("i");

  if (os === "ios") {
    icon.classList.add("fa-brands", "fa-apple");
  } else {
    icon.classList.add("fa-brands", "fa-google-play");
  }

  link.prepend(icon); // Prepend the icon to the link
};

// Main function
const main = () => {

  // Get the device type
  const deviceType = getDeviceType();

  if (deviceType != "desktop") {
    // If the device is not desktop
    appSection.style.display = "block"; // Display the appSection

    appSectionLinks.forEach((link) => {
      // Foreach loop to add mobile apps
      const id = link.id; // Get the link's id

      addLink(id, deviceType); // Add the link
      addIcon(id, deviceType); // Add the icon
    });
  }
};

// About Us Button Listener
aboutUsButton.addEventListener("click", () => {
  if (aboutUsText.style.display === "block") {
    aboutUsText.style.display = "none";
  } else {
    aboutUsText.style.display = "block";
  }
});


// Call the main function
main();


/* Debug Codes */
console.log("Device Type", getDeviceType());
/* appSection.style.display = "block";
appSectionLinks.forEach((link) => {
  // Foreach loop to add mobile apps
  const id = link.id; // Get the link's id
  addLink(id, "ios"); // Add the link
  addIcon(id, "ios"); // Add the icon
});
 */