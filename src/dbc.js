import db from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

const getUsers = async () => {
    const usersCollectionRef = collection(db, "users");
    let users = [];
    const data = await getDocs(usersCollectionRef);
    data.docs.forEach((doc) => {
        users.push(doc.data());
    });
    return users;
};
export { getUsers };
