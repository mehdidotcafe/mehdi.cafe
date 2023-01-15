if (!process.env.NEXT_PUBLIC_REACTFULLPAGE_LICENSE_KEY) {
  throw new Error('Missing NEXT_PUBLIC_REACTFULLPAGE_LICENSE_KEY')
}
if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
  throw new Error('Missing NEXT_PUBLIC_GOOGLE_ANALYTICS')
}
if (!process.env.NEXT_PUBLIC_CONTACT_EMAIL) {
  throw new Error('Missing NEXT_PUBLIC_CONTACT_EMAIL')
}
if (!process.env.NEXT_PUBLIC_CONTACT_LINKEDIN) {
  throw new Error('Missing MEXT_PUBLIC_CONTACT_LINKEDIN')
}
if (!process.env.NEXT_PUBLIC_CONTACT_GITHUB) {
  throw new Error('Missing NEXT_PUBLIC_CONTACT_GITHUB')
}
if (!process.env.NEXT_PUBLIC_CONTACT_MEDIUM) {
  throw new Error('Missing NEXT_PUBLIC_CONTACT_MEDIUM')
}
if (!process.env.NEXT_PUBLIC_DOMAIN_EN) {
  throw new Error('Missing NEXT_PUBLIC_DOMAIN_EN')
}
if (!process.env.NEXT_PUBLIC_DOMAIN_FR) {
  throw new Error('Missing NEXT_PUBLIC_DOMAIN_FR')
}
if (!process.env.NEXT_PUBLIC_DOMAIN) {
  throw new Error('Missing NEXT_PUBLIC_DOMAIN')
}
if (!process.env.NEXT_PUBLIC_DOMAIN_PROTOCOL) {
  throw new Error('Missing NEXT_PUBLIC_DOMAIN_PROTOCOL')
}

export const REACTFULLPAGE_LICENSE_KEY = process.env.NEXT_PUBLIC_REACTFULLPAGE_LICENSE_KEY
export const GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL
export const CONTACT_LINKEDIN = process.env.NEXT_PUBLIC_CONTACT_LINKEDIN
export const CONTACT_GITHUB = process.env.NEXT_PUBLIC_CONTACT_GITHUB
export const CONTACT_MEDIUM = process.env.NEXT_PUBLIC_CONTACT_MEDIUM
export const DOMAIN_EN = process.env.NEXT_PUBLIC_DOMAIN_EN
export const DOMAIN_FR = process.env.NEXT_PUBLIC_DOMAIN_FR
export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN
export const DOMAIN_PROTOCOL = process.env.NEXT_PUBLIC_DOMAIN_PROTOCOL
