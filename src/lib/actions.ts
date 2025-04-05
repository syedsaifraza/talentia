import { db } from "./firebaseService";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

// Fetch posts from Firestore
export async function fetchPosts() {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return posts;
}
