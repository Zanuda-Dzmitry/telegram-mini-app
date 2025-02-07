export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
		head: {
			link: [
				{
					href: 'https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap',
					rel: 'stylesheet',
				},
				{ rel: 'icon', type: 'image/x-icon', href: '/CinemaGuide/favicon.png' },
			],
		},
		baseURL: '/telegram-mini-app/',
	},

	nitro: {
		output: {
			dir: './dist/telegram-mini-app/',
		},
	},
  compatibilityDate: '2024-11-01',
})
