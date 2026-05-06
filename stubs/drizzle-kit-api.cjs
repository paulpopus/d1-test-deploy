const notAvailableInWorker = () => {
  throw new Error(
    'drizzle-kit/api is migration-only and is not available inside the Cloudflare Worker. ' +
      'Run `payload migrate` from Node (the deploy:database step).',
  )
}

module.exports = {
  generateSQLiteDrizzleJson: notAvailableInWorker,
  generateSQLiteMigration: notAvailableInWorker,
  pushSQLiteSchema: notAvailableInWorker,
}
