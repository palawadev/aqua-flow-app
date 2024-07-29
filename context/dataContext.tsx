"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import { db } from "../firebase";
import { DataType } from "@/types/data";
import {collection, getDocs, setDoc ,doc, query, where, orderBy, onSnapshot} from 'firebase/firestore'


const initialContext: DataType = {
      categories: [],
      tangkiProducts: [],
}
const WmsContext = createContext<DataType>(initialContext);
type WmsProviderProps = {
      children: ReactNode;
  }
const AdminDataProvider = ({children}: WmsProviderProps) => {
      const [categories, setCategories] = useState<any[]>([])
      const [tangkiProducts, setTangkiProducts] = useState<any[]>([])
      useEffect(() => {
            const getTangkiProducts = async () => {
                 
                  const tangkiProductCollection = collection(db, 'products');
                  const latestSnapshot = await query(tangkiProductCollection,
                        where("categoryId", "==", "3BBTf9ETCmFCoVxutMwb"),
                        orderBy('name', 'asc'))
                  // const querySnapshot = await getDocs(latestSnapshot)
                  // setTangkiProducts(querySnapshot.docs.map(doc => {
                  //       return {
                  //             id: doc.id,
                  //             data: {
                  //                   id: doc.data().id,
                  //                   name: doc.data().name,
                  //                   categoryId: doc.data().categoryId,
                  //                   capacity: doc.data().capacity,
                  //             }
                  //       }
                  // }))
                  const unsubscribe = onSnapshot(latestSnapshot, (querySnapshot) => {
                        setTangkiProducts(
                          querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            data: {
                              id: doc.data().id,
                              name: doc.data().name,
                              categoryId: doc.data().categoryId,
                              capacity: doc.data().capacity,
                            }
                          }))
                        );
                      });
                
                      // Cleanup function to unsubscribe from listener
                      return () => unsubscribe();
            }
            getTangkiProducts()

      }, [])
      return (
            <WmsContext.Provider value={{ categories, tangkiProducts }}>
                  {children}
            </WmsContext.Provider>
      )
}

export {WmsContext, AdminDataProvider}