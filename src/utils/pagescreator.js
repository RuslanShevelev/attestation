export function createPages(pages, pagesCount, currentPage) {
  if (pagesCount > 12) {
    if (currentPage > 7 && currentPage < pagesCount - 5) {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage - 4; i <= currentPage + 3; i++) {
        pages.push(i)
        if (i === pagesCount) break
      }
      pages.push('...')
      pages.push(pagesCount)
    } else if (currentPage >= pagesCount - 5) {
      pages.push(1)
      pages.push('...')
      for (let i = pagesCount - 9; i <= pagesCount + 5; i++) {
        pages.push(i)
        if (i === pagesCount) break
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i)
        if (i === pagesCount) break
      }
      pages.push('...')
      pages.push(pagesCount)
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }
}
