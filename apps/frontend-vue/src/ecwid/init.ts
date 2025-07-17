import { setupCartHooks } from './cartHooks'
import { setupPageEnhancers } from './pageEnhancers'

export function initCartEnhancements() {
  //@ts-ignore
  Ecwid.OnAPILoaded.add(() => {
    setupCartHooks()
    setupPageEnhancers()
  })
}

export async function initEcwid() {
  //@ts-ignore
  if (typeof xProductBrowser === 'function') {
    //@ts-ignore
    xProductBrowser(
      'categoriesPerRow=3',
      'views=grid(20,3) list(60) table(60)',
      'categoryView=grid',
      'searchView=list',
      'id=my-store-101560752'
    )
  } else {
    console.warn('xProductBrowser not found')
  }
}
