/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/$1',
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
}