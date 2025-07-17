export function waitForElement(
  selector: string,
  callback: (el: Element) => void,
  timeout = 5000,
  intervalTime = 100
) {
  const start = Date.now()
  const interval = setInterval(() => {
    const el = document.querySelector(selector)
    if (el) {
      clearInterval(interval)
      callback(el)
    } else if (Date.now() - start > timeout) {
      clearInterval(interval)
      console.warn(`Timeout waiting for ${selector}`)
    }
  }, intervalTime)
}
