const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
// const url = 'mongodb+srv://mhoarhaan14:7DxLr9yl2W8aELwn@cluster0.mmc2j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url);

// Database Name
const dbName = 'ecommerce-139';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  return db;
}

module.exports = main ;