const { $ } = require("@wdio/globals");
const Page = require("./page");

class NewPastePage extends Page {
  get PostFormtext() {
    return $("#postform-text");
  }
  get SyntaxHighlighting() {
    return $("#postform-format");
  }
  get PasteExpiration() {
    return $("#postform-expiration");
  }

  get Dropdown() {
    return browser.$(
      "#w0 > div.post-form__bottom > div.post-form__left > div.form-group.field-postform-expiration > div"
    );
  }
  get Expiration() {
    return $("#select2-postform-expiration-results");
  }

  get SelectionExp() {
    $(
      "#w0 > div.post-form__bottom > div.post-form__left > div.form-group.field-postform-status > div > span > span.selection"
    );
  }
  get FormName() {
    return $("#postform-name");
  }

  get btnSubmit() {
    return $(
      "#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button"
    );
  }

  get InfoBar() {
    return $(
      "body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.details > div.info-bar > div.info-top"
    );
  }

  get Bash() {
    return $(
      "body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.highlighted-code > div.top-buttons > div.left > a.btn.-small.h_800"
    );
  }
}

module.exports = new NewPastePage();
