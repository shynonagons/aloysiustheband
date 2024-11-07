import type { SocialLink } from "../types/links";

export async function enrichLinks(links: SocialLink[]) {
    return await Promise.all(
      links.map(async ({ url, ...rest }) => {
        const htmlText = await (await fetch(url)).text();
        const description = htmlText.match(
          /<meta.*?name="description".*?content="(.*?)"\/?>/
        )?.[1];
        return { url, description, ...rest };
      })
    );
  }