class WindowSize {
  static getWidth() {
    return window.innerWidth|| document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  }

  static isLarge() {
    return WindowSize.getWidth() >= WindowSize.ceil
  }

  static isSafari() {
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof window.safari !== 'undefined' && window.safari.pushNotification));
  }
}

WindowSize.ceil = 812

export default WindowSize
