import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
    preflight: {
      '@import': `url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap')`,
      body: apply`bg-[#0b0b0d] text-[#cec9c9]`,
    },
  },
} as Options;
