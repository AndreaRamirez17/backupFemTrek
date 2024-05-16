function addToList(traveler) {
    
    var itemList = document.getElementById("traveler-list"); //Buscamos el elemento HTML con el id "traveler-list". Este elemento es el contenedor donde se agregarán las tarjetas de perfil de los viajeros.
  
    var listItem = document.createElement("div");
    listItem.className = "card mb-3";//Creamos un nuevo elemento HTML <div> que será la tarjeta de perfil del viajero.
  
    var profileImage = document.createElement("img");//Creamos un elemento de imagen que contendrá la foto de perfil del viajero.
    profileImage.src = traveler.profilePhoto;//Establecemos la URL de la foto de perfil del viajero.
    profileImage.className = "card-img-top";//Esta clase indica que la imagen debe estar en la parte superior de la tarjeta.
    profileImage.alt = "Foto de perfil de " + traveler.userName + " " + traveler.userLastName;//casos en los que la imagen no se puede cargar.

    // elementos adicionales (cardBody, title, advice, location, tags) para mostrar información como el nombre del viajero, su consejo de viaje, ubicación y etiquetas.
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    var title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = traveler.userName + " " + traveler.userLastName;
  
    var advice = document.createElement("p");
    advice.className = "card-text";
    advice.textContent = traveler.travelAdvice;
  
    var location = document.createElement("p");
    location.className = "card-text";
    location.textContent = "Ubicación: " + traveler.location;
  
    var tags = document.createElement("p");
    tags.className = "card-text";
    tags.textContent = "Etiquetas: " + traveler.tags.join(", ");
    //Añadimos los elementos de título, consejo, ubicación y etiquetas a la tarjeta.
    cardBody.appendChild(title);
    cardBody.appendChild(advice);
    cardBody.appendChild(location);
    cardBody.appendChild(tags);
    //Añadimos la imagen de perfil y el cuerpo de la tarjeta al elemento de la tarjeta principal.
    listItem.appendChild(profileImage);
    listItem.appendChild(cardBody);
    //Añadimos la tarjeta completa al contenedor de la lista de viajeros.
    itemList.appendChild(listItem);
  }
  
  