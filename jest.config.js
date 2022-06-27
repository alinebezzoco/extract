module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  coverageReporters: ['json', 'lcov', 'text-summary', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: { "\\.[jt]sx?$": "babel-jest",
  ".*\.(vue)$": "@vue/vue3-jest" }
}
