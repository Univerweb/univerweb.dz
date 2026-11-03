const FOUNDED = new Date('2011-02-22')

function getYears(now = new Date()) {
  const years = now.getUTCFullYear() - FOUNDED.getUTCFullYear()
  const anniversary = new Date(Date.UTC(
    now.getUTCFullYear(),
    FOUNDED.getUTCMonth(),
    FOUNDED.getUTCDate(),
  ))

  return now < anniversary ? years - 1 : years
}

export function useYears() {
  const years = useState('years', () => getYears())
  const withYears = (text: string) => text.replaceAll('{years}', String(years.value))

  return { years, withYears }
}
