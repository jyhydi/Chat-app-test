import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { COLLECTIONS } from "~/constants";

export default class FirebaseService {
    messageRef = firestore().collection(COLLECTIONS.MESSAGES);

    async signIn() {
        try {
            const response = await auth().signInAnonymously();
            return { user: response.user };
        } catch (error) {
            return { error };
        }
    }

    async emailPWSignIn({ email, password }) {
        try {
            const res = await auth().createUserWithEmailAndPassword(email, password);
            return { user: res.user };
        } catch (error) {
            return { error };
        }
    }

    async fetchMessages() {
        const messages = await this.messageRef
            .orderBy("created_at", "desc")
            .limit(10)
            .get();

        return messages.docs;
    }

    async createMessage({ message, uid }) {
        await this.messageRef.add({
            message,
            user_id: uid,
            created_at: new Date(),
        });
    }
}
