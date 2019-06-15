module.exports = {
    setupFiles: ["<rootDir>/jest.setup.js", "jest-localstorage-mock"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    collectCoverage: true,
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy"
    }
  };
  