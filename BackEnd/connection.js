const { MongoClient} = require('mongodb');
const uri = "mongodb+srv://esvagroup5:gpR8AQLMOGZU73w1@cluster0.wn6u2r4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const dbname = "eSVA"
const collectionName = "userInfo" 

insertUserTest = async () => {
    await client.connect();
        const database = client.db(dbname);
        const collection = database.collection(collectionName)

        const testUsers = [
            {
                "Name": "Jonathan King",
                "Email": "jonathanking@email.com",
                "password": "4asd5a4sdad4"

            },
            {
                "Name": "John Brown",
                "Email": "johnbrown@email.com",
                "password": "4asddada45sda54dasd54a"

            }
        ]
    try{
        const insertUsers = await collection.insertMany(testUsers);
        console.log('users inserted');
    }
    catch(error){
        console.error('Error occurred', error);
    }
    finally{
        await client.close
    }
}

module.exports = {insertUserTest}