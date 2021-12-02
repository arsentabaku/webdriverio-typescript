describe("Legal documents menu", () => {
  it("should open side navigation", async () => {
    var infoIcon = await $("~home.mode.browser.hdr.infoIcon");
    await infoIcon.waitForDisplayed({ timeout: 3000 });
    await infoIcon.click();
  });

  it("should open the legal notice document", async () => {
    await browser.pause(3000);
    var legalNotice = await $("~home.sidenav.container.legalNoticeBtn");
    await legalNotice.waitForDisplayed({ timeout: 3000 });
    await legalNotice.click();
  });
});
