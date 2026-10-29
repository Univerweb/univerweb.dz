const FOUNDED = 2011

export function useYears() {
  const years = new Date().getFullYear() - FOUNDED
  const withYears = (text: string) => text.replaceAll('{years}', String(years))

  return { years, withYears }
}
