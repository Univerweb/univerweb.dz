export function schemaDate(date: string | Date) {
  return `${new Date(date).toISOString().slice(0, 10)}T00:00:00+01:00`
}
