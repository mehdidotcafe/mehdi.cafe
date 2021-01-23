import qs from 'query-string'

class Location {
  static hash(hash) {
    if (hash !== undefined) {
      window.location.hash = hash
    }

    return window.location.hash.substr(1, window.location.hash.length)
  }

  static qs() {
    return qs.parse(window.location.search)
  }

  static pathname() {
    return window.location.pathname.substr(1).split('/')[0] || Location.links[0].link
  }
}

Location.links = [{
  link: 'home',
  label: 'Home',
}, {
  link: 'work',
  label: 'Work',
}, {
  link: 'skills',
  label: 'Skills',
}, {
  link: 'experiences',
  label: 'Experiences',
}]

export default Location
