const {MongoClient} = require('mongodb')
const uri = 'mongodb://localhost:27017'
const dbName = "yash_db"

async function main(){
    const client = new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true})

    try{
        await client.connect();
        console.log("Connected to the MongoDB server")

        const db = client.db(dbName)
        console.log(`Database ${dbName} created`)

        const collectionName = 'newCollection'
        const collection = db.collection(collectionName)
        console.log(`Collection ${collectionName} created`);
        
        const data = [
            {name:'yash',age:20},
            {name:'mayur',age:21},
            {name:'prathamesh',age:20}
        ]

        const result = await collection.insertMany(data);
        console.log(`${result.insertedCount} documents inserted`);

    }
    finally{
        await client.close()
        console.log("connection closed");
        
    }
}

main().catch(console.error)