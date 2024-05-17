function addToList(traveler) {
  var itemList = document.getElementById("traveler-list"); // Contenedor de la lista de viajeros

  var listItem = document.createElement("div");
  listItem.className = "card mb-3"; // Clase para la tarjeta

  var cardHeader = document.createElement("div");
  cardHeader.className = "card-header d-flex align-items-center"; // Div para la imagen y el título

  var profileImage = document.createElement("img");
  profileImage.src = traveler.profilePhoto;
  profileImage.className = "rounded-circle profile-img"; // Clase para la imagen redondeada y pequeña
  profileImage.alt = "Foto de perfil de " + traveler.userName + " " + traveler.userLastName;
  
  var title = document.createElement("h5");
  title.className = "card-title ms-3"; // Clase para el título con margen a la izquierda
  title.textContent = traveler.userName + " " + traveler.userLastName;
  

  cardHeader.appendChild(profileImage);
  cardHeader.appendChild(title);

  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var advice = document.createElement("p");
  advice.className = "card-text";
  advice.textContent = traveler.travelAdvice;

  var location = document.createElement("p");
  location.className = "card-text";
  location.textContent = "Ubicación: " + traveler.location;

  var tags = document.createElement("p");
  tags.className = "card-text";
  tags.textContent = "Etiquetas: " + traveler.tags.join(", ");

  cardBody.appendChild(advice);
  cardBody.appendChild(location);
  cardBody.appendChild(tags);

  // Crear el carrusel de fotos de viaje
  if (traveler.travelPhotos && traveler.travelPhotos.length > 0) {
    var carousel = document.createElement("div");
    carousel.id = "carouselExampleSlidesOnly" + traveler.userName.replace(/\s+/g, '');
    carousel.className = "carousel slide";
    carousel.setAttribute("data-ride", "carousel");

    var carouselIndicators = document.createElement("ol");
    carouselIndicators.className = "carousel-indicators";

    var carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    traveler.travelPhotos.forEach((photo, index) => {
        var carouselItem = document.createElement("div");
        carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");

        var img = document.createElement("img");
        img.className = "d-block w-100";
        img.src = photo;
        img.alt = `Slide ${index + 1}`;

        var indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselExampleIndicators" + traveler.userName.replace(/\s+/g, ''));
        indicator.setAttribute("data-slide-to", index.toString());
        if (index === 0) {
            indicator.className = "active";
        }

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
        carouselIndicators.appendChild(indicator);
    });

    carousel.appendChild(carouselInner);
    carousel.appendChild(carouselIndicators);
    cardBody.appendChild(carousel);
  }

  listItem.appendChild(cardHeader);
  listItem.appendChild(cardBody);
  itemList.appendChild(listItem);
}
