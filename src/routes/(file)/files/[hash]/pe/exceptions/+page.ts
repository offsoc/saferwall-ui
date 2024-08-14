import type { Saferwall } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ params, parent }) => {
	const { client } = await parent();
	const { pe } = await client.request<Saferwall.File>(`files/${params.hash}?fields=pe.exception`);
	return {
		exceptions: pe.exception
	};
}) satisfies PageLoad;
