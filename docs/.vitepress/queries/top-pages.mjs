export const TOP_PAGES_QUERY = `
  query TopPagesCounter($t: String) {
    topPages(dateRange: "today", siteId: "*", limit: 10, t: $t) {
      page
      visits
    }
  }
`