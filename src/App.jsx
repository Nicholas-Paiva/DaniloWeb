import React, {useState} from "react"

function App(){

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [color, setColor] = useState("")
  const [mesa, setMesa] = useState("")
  //Idade, Nacionalidade, Ocupação, História
  //Força, Agilidade, Percepcao, HabManuais, Intelecto, HabSociais
  // Contatos
  
  const jsonData = {
    name, image, color, mesa
   };

   function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
   }
   
   function onDownload(){
    download(JSON.stringify(jsonData), `${name}.json`, "text/plain");
   }

  return(
    <div>
      <form>
        <label htmlFor="name">Nome do Personagem:</label><br/>
        <input type="text" id="name" value={name} onChange={ (event) => setName(event.target.value)}/><br/>
        <label htmlFor="image">Imagem:</label><br/>
        <input type="text" id="image" value={image} onChange={ (event) => setImage(event.target.value)}/><br/>
        <label htmlFor="color">Cor</label><br/>
        <input type="text" id="color" value={color} onChange={ (event) => setColor(event.target.value)}/><br/>
        <label htmlFor="mesa">Mesa</label><br/>
        <input type="text" id="mesa" value={color} onChange={ (event) => setMesa(event.target.value)}/><br/>
        <button onClick={onDownload}>Clica aqui puta</button>
      </form>
    </div>
  )
}

export default App