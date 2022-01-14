import "../styles/globals.css";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { getStorage, ref, listAll } from "firebase/storage";
import firebaseConfig from "../firebase/config";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);
    console.log(storage);

    // Create a reference under which you want to list
    const listRef = ref(storage);

    // Find all the prefixes and items.
    listAll(listRef, "points")
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          console.log(itemRef);
          // All the items under listRef.
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
