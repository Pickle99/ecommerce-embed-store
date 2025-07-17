import { waitForElement } from './domWaiter'
import { injectLandingPage } from './injectors/landingPage'
import { injectCartPage } from './injectors/cartPage'

export function setupPageEnhancers() {
  //@ts-ignore
  Ecwid.OnPageLoaded.add((page: any) => {
    document.querySelectorAll('.landing-widget').forEach((el) => el.remove())

    if (page.type === 'CATEGORY') injectLandingPage()

    // Wait for element made especially for this one, because in 1 in 100 situations, when we navigate to settings, turn off the widget,
    //and after we navigate back to our website from Back to store button, and then if we will navigate to cart, with 25%(+-) chance we will not see the settings and widget at all, even if we toggled it from off to on
    if (page.type === 'CART') {
      waitForElement('.ec-store__content-wrapper', () => injectCartPage())
    }
  })
}
