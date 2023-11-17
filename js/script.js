

//Los elementos que tienes que imprimir dentro de li son name , image voy a intentar crear una estructura como 
//en el ejemplo

const characterList = document.getElementById('character-list');

//Creado un elemento lista
const li= document.createElement("li")

//le he dicho que  el elemento que he creado es hijo de ul
characterList.appendChild(li);


//Los elementos que tienes que imprimir dentro de li son: name e image voy a intentar crear una estructura como 
//en el ejemplo
 // for (const element of characterListId){
 // let templateRickeMorty = `
 //<img src= "https://rickandmortyapi.com/api/${element.episode}" alt="${element.name}"/>
  //<h3>${element.name}</h3>
  //</div>`

//li.innerHTML += templateRickeMorty;



//obtenerChiste.addEventListener('click', () => {
  let rickeMorthy =fetch('https://rickandmortyapi.com/api/character/?page=1.')
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
   .then((data) => {
    for (i=0;i<rickeMorthy.length;i++){
      console.log(data.results[i].name)
    }
    

    //intento crear una estructura template anidada en el fetch para 
       //  for (const element of characterListId){
       //let templateRickeMorty = `
      //<img src= "https://rickandmortyapi.com/api/${element.next}" alt="${element.name}"/>
      //<h3>${element.name}</h3>
      //</div>`

      //li.innerHTML += templateRickeMorty;
      //   }

   })
    .catch((error) => {
      li.innerText = 'algo estas haciendo mal, pero mejor que ayer felicitate';
    });
//});



