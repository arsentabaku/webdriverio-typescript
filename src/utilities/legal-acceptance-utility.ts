import { assert } from 'chai';

export abstract class LegalAcceptance {
    public static acceptTermsAndConditions() : void {
        browser.pause(3000);
        assert.equal(true, true);
        console.log('******Testing...');
    }
}
