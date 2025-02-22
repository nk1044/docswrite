import { Client, Account, Databases, Storage} from 'appwrite';


const client = new Client();

client
    .setEndpoint(String(import.meta.env.VITE_APPWRITE_ENDPOINT))
    .setProject(String(import.meta.env.VITE_APWRITE_PROJECT_ID));

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);