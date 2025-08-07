// src/sanityClient.js
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '24fe96nu', 
  dataset: 'production',        
  useCdn: true,              
  apiVersion: '2023-08-07',     
});

export default sanityClient;
