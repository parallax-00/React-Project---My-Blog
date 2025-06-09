import expo from "../../environmentVar/expo";
import { Client, Storage, ID } from "appwrite";

class StorageServices {
  client = new Client();
  buckets;

  constructor() {
    this.client
      .setEndpoint(expo.appwriteEndpoint)
      .setProject(expo.appwriteProjectID);
    this.buckets = new Storage(this.client);
  }
  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        expo.appwriteStorageID,
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
      await this.buckets.deleteFile(expo.appwriteStorageID, fileID);
      return true;
    } catch (error) {
      console.log("Error in Appwrite storageServices :: deleteFile", error);
      return fasle;
    }
  }
  getFilePreview(fileID) {
    return this.buckets.getFilePreview(expo.appwriteStorageID, fileID);
  }
}

const storageServices = new StorageServices();
export default storageServices;
