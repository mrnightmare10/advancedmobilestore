import sanityClient from '@sanity/client';
import config from './config';
const client = sanityClient({
  projectId: config.projectId,
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-02-03"
});
export default client;
