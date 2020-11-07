module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(s)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
