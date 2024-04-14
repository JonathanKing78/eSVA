const { MongoClient} = require('mongodb');
const uri = "mongodb+srv://esvagroup5:gpR8AQLMOGZU73w1@cluster0.wn6u2r4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const dbname = "eSVA"
const collectionName = "userInfo" 

insertUser = async (form) => {
    await client.connect();
        const database = client.db(dbname);
        const collection = database.collection(collectionName)       
    try{
        const insertUsers = await collection.insertOne(form);
        console.log('user inserted');
    }
    catch(error){
        console.error('Error occurred', error);
    }
    finally{
        await client.close
    }
}


checkUser = async (form) =>{
    await client.connect()
    const database = client.db(dbname);
    const collection = database.collection(collectionName)
    let found
    // console.log(form.email, form.password);
    try{
     found = await collection.findOne({email : form.email , password: form.password})
     delete found.password
     delete found.cpassword
    //  console.log("found", found);

    }catch(error){
        console.error("error");
    }finally{
        await client.close()
    }

    return found;

}

module.exports = {insertUser, checkUser}