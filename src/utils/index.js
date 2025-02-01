function formatDate(dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString)

  // Get day, month, and year components
  const day = date.getDate()
  const month = date.getMonth() + 1 // Months are zero-based
  const year = date.getFullYear()

  // Arabic month names array
  const arabicMonths = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ]

  // Get the Arabic month name
  const arabicMonth = arabicMonths[month - 1]

  // Format the date string
  const formattedDate = `${day} ${arabicMonth} ${year}`

  return formattedDate
}

export { formatDate }
