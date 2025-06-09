import expo from "../../environmentVar/expo";
import { Client, Databases } from "appwrite";

class DbServices {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(expo.appwriteEndpoint)
      .setProject(expo.appwriteProjectID);
    this.databases = new Databases(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        expo.appwriteDatabaseID,
        expo.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Error in Appwrite dbServices :: createPost", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        expo.appwriteDatabaseID,
        expo.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Error in Appwrite dbServices :: updatePost", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        expo.appwriteDatabaseID,
        expo.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Error in Appwrite dbServices :: deletePost", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      const post = await this.databases.getDocument(
        expo.appwriteDatabaseID,
        expo.appwriteCollectionID,
        slug
      );
      if (post) {
        return post;
      } else {
        console.log("Error in Appwrite dbServices :: getPost");

        return false;
      }
    } catch (error) {
      console.log("Error in Appwrite dbServices :: getPost", error);
      return false;
    }
  }
  async listPosts() {
    try {
      return await this.databases.listDocuments(
        expo.appwriteDatabaseID,
        expo.appwriteCollectionID,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Error in Appwrite dbServices :: listPosts", error);
      return false;
    }
  }
}

const dbServices = new DbServices();
export default dbServices;
