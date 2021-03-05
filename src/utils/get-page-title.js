import defaultSettings from '@/settings'

const title = defaultSettings.title || '奇遇开发者平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
