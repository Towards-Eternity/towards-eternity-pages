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
