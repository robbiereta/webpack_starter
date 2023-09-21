import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from "mdbreact";
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://Robbie:53caVT5RnJeh97K1@cluster0.c9uqb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
function Precios() {
  //save axios  response to state
  let [data2, setData] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.

  useEffect(() => {
    setData(lista);
  }, []);


  
  const data = {
    columns: [
      {
        label: "Codigo",
        field: "A",
        sort: "asc",
        width: 150,
      },
      {
        label: "Descripcion",
        field: "B",
        sort: "asc",
        width: 150,
      },
      {
        label: "Precio",
        field: "D",
        sort: "asc",
        width: 150,
      },
      {
        label: "Ubicacion",
        field: "F",
        sort: "asc",
        width: 150,
      }
    ],
    rows: data2.lista,
  };

  return (
    <div className="App">
      <h1>Mastermoto</h1>
      <MDBDataTable striped bordered hover data={data} />
    </div>
  );
}

export default Precios;
