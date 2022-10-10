import sveltePreprocess from 'svelte-preprocess';
import typescript from 'svelte-preprocess';

export default {
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser',
		},
	},
  preprocess: [
		typescript(),
    sveltePreprocess()
  ],
	vitePlugin: {
		disableDependencyReinclusion: ['@roxi/routify']
	}
}
