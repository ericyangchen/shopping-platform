import { db } from '../firebase'; 
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter
} from 'firebase/firestore';



export const getFirstBatch = async (category, batchsize, orderby, orderdirection) => {
  const q = query(
    collection(db, "product"),
    where("category", "==", category),
    orderBy(orderby, orderdirection),
    limit(batchsize)
  );
  try {
    const documentSnapshots = await getDocs(q);
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];

    const products = []
    documentSnapshots.forEach((doc, index) => {
      products.push({
        id: doc.id,
        sku: doc.data().sku,
        brand: doc.data().brand,
        title: doc.data().title,
        price: doc.data().price,
        originalPrice: doc.data().originalPrice,
        description: doc.data().description,
        tag: doc.data().tag,
        size: doc.data().size,
        src: doc.data().src,
      })
    })

    return { products, lastVisible };
  } catch (error) {
    console.log(error);
  }
}

export const getNextBatch = async (category, batchsize, orderby, orderdirection, lastvisible) => {
  const q = query(
    collection(db, "product"),
    where("category", "==", category),
    orderBy(orderby, orderdirection),
    startAfter(lastvisible),
    limit(batchsize)
  );
  try {
    const documentSnapshots = await getDocs(q);
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];

    const products = []
    documentSnapshots.forEach((doc, index) => {
      products.push({
        id: doc.id,
        sku: doc.data().sku,
        brand: doc.data().brand,
        title: doc.data().title,
        price: doc.data().price,
        originalPrice: doc.data().originalPrice,
        description: doc.data().description,
        tag: doc.data().tag,
        size: doc.data().size,
        src: doc.data().src,
      })
    })
    return { products, lastVisible };
  } catch (error) {
    console.log(error);
  }
}