const FOUNDED = new Date('2011-02-22')

export function useYears() {
  const years = useState('years', () => new Date().getFullYear() - FOUNDED.getFullYear())
  const withYears = (text: string) => text.replaceAll('{years}', String(years.value))

  return { years, withYears }
}
