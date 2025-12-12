module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/app/napkin-calculator/utils"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
};
