
import { Client, Storage, ID } from "appwrite";

class StorageServices {
  client = new Client();
  buckets;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    this.buckets = new Storage(this.client);
  }
  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        import.meta.env.VITE_APPWRITE_STORAGE_ID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error in Appwrite storageServices :: uploadFile", error);
      return false;
    }
  }
  async deleteFile(fileID) {
    try {
      await this.buckets.deleteFile(import.meta.env.VITE_APPWRITE_STORAGE_ID, fileID);
      return true;
    } catch (error) {
      console.log("Error in Appwrite storageServices :: deleteFile", error);
      return fasle;
    }
  }
  getFilePreview(fileID) {
    return this.buckets.getFilePreview(import.meta.env.VITE_APPWRITE_STORAGE_ID, fileID);
  }
}

const storageServices = new StorageServices();
export default storageServices;
