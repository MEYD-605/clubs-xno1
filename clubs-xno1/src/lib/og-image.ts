/**
 * OG image URL utility for ClubsxAI pages.
 */

const SITE_DOMAIN = 'https://clubsxai.com';
const OG_IMAGE_ENDPOINT = '/api/og';

export type OGImageUrlParams = {
    title: string;
    description: string;
    imagePath?: string;
};

function toAbsoluteUrl(maybePath: string): string {
    if (/^https?:\/\//i.test(maybePath)) return maybePath;
    return new URL(maybePath.startsWith('/') ? maybePath : `/${maybePath}`, SITE_DOMAIN).toString();
}

/**
 * Generates a ClubsxAI OG image URL.
 *
 * The returned URL points at the ClubsxAI OG image endpoint and includes the
 * provided title/description (and optional image) as URL query parameters.
 */
export function getOGImageUrl(title: string, description: string, imagePath?: string): string;
export function getOGImageUrl(params: OGImageUrlParams): string;
export function getOGImageUrl(
    titleOrParams: string | OGImageUrlParams,
    description?: string,
    imagePath?: string
): string {
    const params: OGImageUrlParams =
        typeof titleOrParams === 'string'
            ? { title: titleOrParams, description: description ?? '', imagePath }
            : titleOrParams;

    const url = new URL(OG_IMAGE_ENDPOINT, SITE_DOMAIN);
    url.searchParams.set('title', params.title);
    url.searchParams.set('description', params.description);
    if (params.imagePath) url.searchParams.set('image', toAbsoluteUrl(params.imagePath));
    return url.toString();
}
