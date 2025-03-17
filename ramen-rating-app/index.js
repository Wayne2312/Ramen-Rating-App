let ramens = [
    { name: "Shoyu Ramen", restaurant: "Ichiran", leImage: "shoyu.jpeg", rating: "5/10", comment: "Delicious!" },
    { name: "Miso Ramen", restaurant: "Menya", leImage: "miso.jpeg", rating: "4/10", comment: "Very flavorful!" },
    { name: "Tonkotsu Ramen", restaurant: "Ramen-ya", leImage: "tonkotsu.jpeg", rating: "6/10", comment: "Very rich!" },
  ];

  const menu = document.getElementById("menu");
  const container = document.getElementById("Image-container");

  // Function to display ramen details when an image is clicked
  function AddNewImage(ramen) {
    container.innerHTML = ""; // Clear the container
    const newimg = document.createElement("img");
    newimg.src = ramen.leImage;
    container.appendChild(newimg);

    const text = document.createElement("div");
    text.innerHTML =
      "Name: " + ramen.name +
      "<br>Restaurant: " + ramen.restaurant +
      "<br>Rating: " + ramen.rating +
      "<br>Comment: " + ramen.comment;
    container.appendChild(text);
  }

  // Display initial ramen menu
  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.leImage;
    menu.appendChild(img);

    // Attach click event listener to the image
    img.addEventListener("click", () => AddNewImage(ramen));
  });

  // Add form submission logic
  function addSubmitListener() {
    const form = document.getElementById("form");
    const button = document.getElementById("Create-button");

    // Show the form when the button is clicked
    button.addEventListener("click", () => {
      form.style.display = "block";
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload

      const name = document.getElementById("name").value;
      const restaurant = document.getElementById("Restaurant").value;
      const leImage = document.getElementById("Submitted-Image").value;
      const rating = document.getElementById("rating").value;
      const comment = document.getElementById("comment").value;

      // Add new ramen to the array
      let newRamen = { name, restaurant, leImage, rating, comment };
      ramens.push(newRamen);

      // Display the new ramen image in the menu
      const submittedImg = document.createElement("img");
      submittedImg.src = leImage;
      menu.appendChild(submittedImg);

      // Attach click event listener to the new ramen image
      submittedImg.addEventListener("click", () => AddNewImage(newRamen));

      // Clear form inputs and hide the form
      form.reset();
    });
  }

  // Initialize submit listener
  addSubmitListener();