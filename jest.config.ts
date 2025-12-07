// jest.config.ts
import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/main.tsx'],
  coverageThreshold:{
    global:{
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    }
  }
};

export default config;