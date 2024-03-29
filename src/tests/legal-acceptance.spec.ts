import { LegalAcceptance } from "../utilities/legal-acceptance-utility";

describe("Hovers test", () => {
  it("should accept terms and conditions", async () => {
    LegalAcceptance.acceptTermsAndConditions();
    const acceptnBtn1 = await $("~home.overlay.legalAccept.controlBtn.accept");
    await acceptnBtn1.waitForDisplayed({ timeout: 3000 });
    await acceptnBtn1.click();
  });

  it("should accept data protection", async () => {
    await browser.pause(3000);
    var acceptnBtn2 = await $("~home.overlay.legalAccept.controlBtn.accept");
    await acceptnBtn2.waitForDisplayed({ timeout: 3000 });
    await acceptnBtn2.click();
  });
});
