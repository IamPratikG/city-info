module.exports = {
  testEnvironment: "@bufbuild/jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/apps/client/src/setupTests.ts"],
  transformIgnorePatterns: ["node_modules/(?!(@vis.gl/react-google-maps)/)"],
};
