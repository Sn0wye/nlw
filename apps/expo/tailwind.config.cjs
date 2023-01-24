/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('@nlw/tailwind-config')],
  theme: {
    extend: {
      fontFamily: {
        'inter-400': ['"Inter_400Regular"'],
        'inter-600': ['"Inter_600SemiBold"'],
        'inter-700': ['"Inter_700Bold"'],
        'inter-800': ['"Inter_800ExtraBold"']
      }
    }
  }
};
