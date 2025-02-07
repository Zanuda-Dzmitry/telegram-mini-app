// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
		// head: {
		// 	link: [
		// 		{
		// 			href: 'https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap',
		// 			rel: 'stylesheet',
		// 		},
		// 		{ rel: 'icon', type: 'image/x-icon', href: '/CinemaGuide/favicon.png' },
		// 	],
		// },
		baseURL: '/telegram-mini-app/',
	},

	nitro: {
		output: {
			dir: './dist/telegram-mini-app',
		},
	},
})
