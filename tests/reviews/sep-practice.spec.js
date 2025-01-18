import { test } from '@playwright/test';

test('SEP practice', async ({ page }) => {
  // Test body

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64")}`
  });

  await page.goto(process.env.SEP_URL);

  // step 1: start application
  let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");
  await firstNameInputBox.fill("Muhtar");

  let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");
  await lastNameInputBox.fill("Mahmut");

  let emailInputBox = page.locator("//input[@formcontrolname='email']");
  await emailInputBox.fill("mahmut.muhtar@example.com");

  let phoneNumberInputBox = page.locator("//input[@formcontrolname='phoneNumber']");
  await phoneNumberInputBox.fill("555-123-4567");

  let howDidYouHearDropDwon = page.locator("//mat-label[text()='How did you hear about us?']");
  await howDidYouHearDropDwon.click();

  await page.click("//span[text()='Email']");

  let nextButton = page.locator("//button[text()=' Next']");
  await nextButton.click();

  // step 2: payment plan
  let upfrontPaymentPlanOption = page.locator("//mat-expansion-panel-header[.//span[contains(text(),'Upfront')]]");
  await upfrontPaymentPlanOption.click();

  let nextButton2 = page.locator("//button[text()='Next']");
  await nextButton2.click();

  // step 3: Review
  let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
  
  let cardNumberInputBox = paymentFrame.locator("//input[@id='Field-numberInput']");
  await cardNumberInputBox.fill(process.env.CARD_NUMBER);

  let expirationDateInputBox = paymentFrame.locator("//input[@id='Field-expiryInput']");
  await expirationDateInputBox.fill(process.env.EXPIRATION_DATE);

  let securityCodeInputBox = paymentFrame.locator("//input[@id='Field-cvcInput']");
  await securityCodeInputBox.fill(process.env.SECURITY_CODE);

  let zipCodeInputBox = paymentFrame.locator("//input[@id='Field-postalCodeInput']");
  await zipCodeInputBox.fill(process.env.ZIP_CODE);

  let termsAndConditionsCheckBox = page.locator("//input[@id='defaultCheck2']");
  await termsAndConditionsCheckBox.check();

  let payButton = page.locator("//button[.//span[text()='Pay']]");
  await payButton.click();



});


/*

<button _ngcontent-ng-c3758746842="" type="submit" class="next-button"> Next</button>

<button _ngcontent-ng-c3758746842="" class="next-button" ng-reflect-ng-class="">Next</button>


<iframe name="__privateStripeFrame9049" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *; publickey-credentials-get *" src="https://js.stripe.com/v3/elements-inner-payment-ede98ee2b141fe1f599e4ec4c6565aa6.html#wait=false&amp;rtl=false&amp;locale=en&amp;elementsInitSource=stripe.elements&amp;componentName=payment&amp;keyMode=test&amp;apiKey=pk_test_51O70byJmxFuDfdzn7GoavCBwHsek6aPSETh05GCvN6lngX638nhrOVoz9HedkrrOU69mX9HTtEWsZgq8jsiFvxer00VygJCa3L&amp;referrer=https%3A%2F%2Fqa.sep.tdtm.cydeo.com%2Ftaws&amp;controllerId=__privateStripeController9047" title="Secure payment input frame" style="border: 0px !important; margin: -4px; padding: 0px !important; width: calc(100% + 8px); min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; transform: translate(0px) !important; color-scheme: light only !important; height: 151.016px; opacity: 1; transition: height 0.35s, opacity 0.4s 0.1s;"></iframe>

*/

