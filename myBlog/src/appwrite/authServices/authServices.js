import { Client, Account, ID } from "appwrite";

class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // return userAccount; //! Here the account is made and sign up is done but we can directly call another method like login() so that the user directly logs in the account and start writing and reviewing posts.
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error in Appwrite authServices :: createAccount", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error in Appwrite authServices :: login", error);
    }
  }
  async getCurrentUser() {
    try {
      const session = await this.account.getSession("current");
      if (session) {
        return await this.account.get();
      }
    } catch (error) {
      console.log("Error in Appwrite authServices :: getCurrentUser", error);
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Error in Appwrite authServices :: logout", error);
    }
  }
}
const authServices = new AuthServices();
export default authServices;
