import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "orujgmse",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "skh6jiFLMfJENHYAC8Rb8phibtbvn5HwazzVvlYSNAo0KTVEYWFPIBcEecO1RK28M3OktBO51iEhlbfvY5D8zTSST4hclX3eejjUpnvi38yYuOmo441cLKqnBnV3UQVnZxImhHOowjNALkeR7XzyH1mHAW9VhJJmgbvDvPH6KwHMSFTskivA",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
