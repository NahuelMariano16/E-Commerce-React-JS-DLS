const getProducts = ()=>{
    const collectionRef = categoryId
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return { id: doc.id,...doc.data()}
            })
            setProducts(products)
        })
        .catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
}