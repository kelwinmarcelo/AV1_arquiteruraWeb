const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://KelwinMarcelo12113272:YIt6453Vmi45SIOI@cluster0.5j9erod.mongodb.net/Maps?retryWrites=true&w=majority";

async function consultarTodasLocalizacoes() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db("Maps");
        const collection = db.collection("Marker");

        const locations = await collection.find().toArray();
        
        client.close();

        return locations;
    } catch (error) {
        throw error;
    }
}

consultarTodasLocalizacoes()
    .then(locations => {
        console.log("Localizações consultadas:", locations);
    })
    .catch(error => {
        console.error("Erro ao consultar localizações:", error);
    });
