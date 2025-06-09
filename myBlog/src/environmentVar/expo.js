const expo = {
  appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteStorageID: String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
};
export default expo;
