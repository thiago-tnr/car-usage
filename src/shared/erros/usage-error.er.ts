export class UsageError extends Error {
  constructor (message?: string) {
    super(message ?? 'Forbidden, you are not allowed to do this')
    this.name = 'UsageError'
  }
}
