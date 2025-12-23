const consentKey = "cookieConsent";

  if (!localStorage.getItem(consentKey)) {
    document.getElementById("cookie-consent").classList.add("show");
  }

  document.getElementById("acceptCookies").onclick = () => {
    localStorage.setItem(consentKey, "accepted");
    document.getElementById("cookie-consent").classList.remove("show");
  };

  document.getElementById("refuseCookies").onclick = () => {
    localStorage.setItem(consentKey, "refused");
    document.getElementById("cookie-consent").classList.remove("show");
  };