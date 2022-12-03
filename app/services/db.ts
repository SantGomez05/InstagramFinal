import {initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {getFirestore,
        collection,
        addDoc, 
        query,
        where,
        getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {DataShape} from "../components/data.js";

        interface dataPostSnapshot extends DataShape{
          data: () => DataShape;
        }

const firebaseConfig = {
  apiKey: "AIzaSyDJL4BCJK99nIzpS7HX-LAIEKWm3eHHvyk",
  authDomain: "proyecto-final-instagram.firebaseapp.com",
  projectId: "proyecto-final-instagram",
  storageBucket: "proyecto-final-instagram.appspot.com",
  messagingSenderId: "290361521905",
  appId: "1:290361521905:web:e604969af0e34deac35b50"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db,"Usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"Usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
      return false;
    }
  }

  export const addPost = async ({
    username,
    image,
    description

  }:{
    username: string;
    image: string;
    description: string;

  }) => {
    try{
      await addDoc(collection(db,"posts"),{
        username,
        image,
        description,
      });
      return true;
    } catch (error){
      return false;
  }
}

export const getPost = async () => {
  try{
    const posts: DataShape [] = [];
    const querySnapshot = await getDocs(collection(db,"post")); // '' o ""?
    querySnapshot.forEach((post: dataPostSnapshot) => {
      posts.push(post.data());

    });
    return posts;
  } catch (error){
    console.log(error);
    alert ('Hay un error')
  }
}
    
 