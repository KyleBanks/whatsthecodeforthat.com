const PREFERRED_LANGUAGE_KEY = "preferred-language";

function setLanguage(lang) {
	console.log("setLanguage(" + lang + ")");
	lang = lang || "all";

	var bodyClasses = document.body.className.split(" ");
	var newBodyClasses = [];
	for (var c in bodyClasses) {
		if (c.indexOf("-lang") === -1) {
			newBodyClasses.push(c);
		}
	}
	newBodyClasses.push(lang + "-lang");
	document.body.className = newBodyClasses.join(" ");

	if (selectLang)
		selectLang.value = lang;
	if (typeof(Storage) !== "undefined")
		localStorage.setItem(PREFERRED_LANGUAGE_KEY, lang);
}

let selectLang = document.getElementById('select-language');
if (selectLang) {
	selectLang.onchange = function() {
		setLanguage(selectLang.value);
	};
}

if (typeof(Storage) !== "undefined") {
	setLanguage(localStorage.getItem(PREFERRED_LANGUAGE_KEY));
} else {
	setLanguage();
}