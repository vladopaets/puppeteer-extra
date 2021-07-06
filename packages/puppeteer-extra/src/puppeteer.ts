// A wildcard import would result in a `require("puppeteer")` statement
// at the top of the transpiled js file, not what we want. :-/

export { Browser } from 'puppeteer-extended-frame-methods'
export { Page } from 'puppeteer-extended-frame-methods'
export { ConnectOptions } from 'puppeteer-extended-frame-methods'
export { ChromeArgOptions } from 'puppeteer'
export { LaunchOptions } from 'puppeteer-extended-frame-methods'
export { FetcherOptions } from 'puppeteer'
export { BrowserFetcher } from 'puppeteer-extended-frame-methods'
