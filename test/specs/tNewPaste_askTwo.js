const newpastePage = require("../pageobjects/newpaste.page");

describe("Task 2 tests", () => {
  it("Create 'New Paste and check'", async () => {
    await newpastePage.open();

    const code = `git config --global user.name  "New Sheriff in Town"
      git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
      git push origin master --force`;

    const text = await newpastePage.PostFormtext.setValue(code);
    expect(text).toHaveText(code);

    const postform = newpastePage.SyntaxHighlighting;
    postform.selectByVisibleText("value", "8");
    const option = postform.getValue("value");
    expect(option).toHaveText("bash");

    const dropdown = newpastePage.PasteExpiration;
    dropdown.selectByVisibleText("value", "10M");
    const value = dropdown.getValue("value");
    expect(value).toHaveText("10 Minutes");

    const name = "how to gain dominance among developers";
    const pasetname = await newpastePage.FormName.setValue(name);
    expect(pasetname).toHaveText(name);

    const myButton = await newpastePage.btnSubmit;
    await myButton.click();

    //check
    await newpastePage.open("/XJwjC2Cw");
    await expect(browser).toHaveUrl("https://pastebin.com/XJwjC2Cw");
    const info = await newpastePage.InfoBar;
    expect(info).toContain(code);
    const bash = await newpastePage.Bash;
    expect(bash).toHaveText("Bash");
    const paragraphText = await browser.getText(
      "body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.highlighted-code > div.source.text > ol > li > div"
    );
    const expectedText = 'git config --global user.name "New Sheriff in Town"';
    expect(paragraphText).to.equal(expectedText);
  });
});
