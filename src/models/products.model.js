import fs from 'fs/promises';
import path from 'path';
import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';

const __dirname = import.meta.dirname;

const productsCollection = collection(db, "products");

const getAllProducts = async () => {
   try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
   }
    catch (error) {
        console.error(error);
    }
};

const getProductById = async (id) => {
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    }
    catch (error) {
        console.error(error);
    }
};

const createProduct = async (data) => {
    try{
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    }catch (error){
        console.error(error);
    }
};

const deleteProduct = async (id) => {
    try{
        const producRef = doc(productsCollection, id);
        const snapshot = await getDoc(producRef);

        if(!snapshot.exists()){
            return false;
        }

        await deleteDoc(producRef);
        return true;
    }
    catch (error){
        console.error(error);
    }
};

export default {getAllProducts, getProductById, createProduct, deleteProduct};