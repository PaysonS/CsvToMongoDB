const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = ""; // insert youre connection here
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// Connect to the MongoDB server
async function connect() {
  try {
    await client.connect();
    console.log('Connected to the database');

    // Specify the database and collection
    const db = client.db('csvtomongo');
    const collection = db.collection('csvtomongoCollection');

    // Data to be inserted

    insertData

    const dataToInsert = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };

    // Insert the data into the collection
    const result = await collection.insertOne(dataToInsert);
    console.log('Data inserted successfully:', result.ops);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Call the connect function
connect();