import defaultSettings from '@/settings'

const title = defaultSettings.title || '爱奇艺官网'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
