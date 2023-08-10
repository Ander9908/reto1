const server = require("./server");
const {PORT, MONGO_URI, MONGO_ATLAS_API_KEY} = require("./config");
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(async ()=>{
    //INTENTE PONERLE AUTOMATICAMENTE LA IP PUBLICA A LA LISTA BLANCA PERO YA ME GANO EL TIEMPO EL CODIGO COMENTADO ERA ESO
   //POR ULTIMO DECIDI PONERLO QUE INGRESEN DESDE CUALQUIER LUGAR PARA QUE TENGA ACCESO
    /*const publicIP = await getPublicIP();
    if (publicIP) {
    await addIPToWhitelist(publicIP);
    console.log(`Added IP ${publicIP} to MongoDB Atlas whitelist.`);
    }*/
    server.listen(PORT,()=>{
        console.log(`libraryDB backend running on port ${PORT}`);
    });
    
    
})
.catch(console.log);



/*
//function para obtener la ip
async function getPublicIP() {
    try {
      const response = await axios.get('https://httpbin.org/ip');
      const data = response.data;
      return data.origin;
    } catch (error) {
      console.error('Error al obtener la dirección IP pública:', error);
      return null;
    }
  }

// Function para agregar la ip a MongoAtlas
async function addIPToWhitelist(ip) {
    try {
      const apiEndpoint = `https://cloud.mongodb.com/api/atlas/v1.0/groups/64d112bc26cca6202c41a28b/whitelist?pretty=true`;
      const apiKey = MONGO_ATLAS_API_KEY;
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      };
  
      const payload = {
        cidrBlock: `${ip}/32`,
        comment: 'Added by libraryDB backend'
      };
  
      const response = await axios.post(apiEndpoint, payload, { headers });
      return response.data;
    } catch (error) {
      console.error('Error al agregar IP a la lista blanca:', error);
      throw error;
    }
  }*/