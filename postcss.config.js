require('ts-node').register({
  compilerOptions: {
    module: 'CommonJS'
  }
});

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
