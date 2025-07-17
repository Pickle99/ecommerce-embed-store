export function getFirstSentence(seoDescription: string): string {
  if (!seoDescription) return ''

  const dotIndex = seoDescription.indexOf('.')
  const qIndex = seoDescription.indexOf('?')

  if (dotIndex === -1 && qIndex === -1) return seoDescription

  const firstIndex =
    dotIndex === -1 ? qIndex : qIndex === -1 ? dotIndex : Math.min(dotIndex, qIndex)

  return seoDescription.slice(0, firstIndex + 1)
}
