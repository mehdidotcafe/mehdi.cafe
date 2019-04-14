class WindowSize {
  static getWidth() {
    return window.innerWidth|| document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  }

  static isLarge() {
    return WindowSize.getWidth() >= WindowSize.ceil
  }
}

WindowSize.ceil = 1170

export default WindowSize
