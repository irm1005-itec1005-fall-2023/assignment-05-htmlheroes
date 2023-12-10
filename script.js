//event listeners for the nav link
document.getElementById("contactLink").addEventListener("click", function(){
  openConPopup();
});

//func to open popup window
function openConPopup() {
  //console.log(contactPopup);
  const popupName = `PopupWindow_contactPopup`;
  const popup = window.open('', popupName, 'width=300,height=410');

  //content for window
  popup.document.write(`
      <title>Contact Us</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap">
      <div class="popupTot">
      <div class="popupHeader">
          <h2>Contact Us!!</h2>
      </div>
      <div class="popupForm">
          <form action="#" method="post">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" class="input-box" required><br>

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" class="input-box" required><br>

              <label for="message">Message:</label><br>
              <textarea id="message" name="message" rows="4" class="input-box" required></textarea><br>

              <button class="submit" onclick="window.close()">Submit</button>
          </form>
      </div>
      </div>
  `);
  popup.document.close();
}

  //event listeners for the nav link
document.getElementById("aboutLink").addEventListener("click", function(){
  openAbPopup();
});

//func to open popup window
function openAbPopup() {
  //console.log("clicked!");
  const popupName = `PopupWindow_aboutPopup`;
  const popup = window.open('', popupName, 'width=410,height=320');

  //content for window
  popup.document.write(`
      <title>About Us</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap">
      <div class="abTot">
          <p>Welcome to the HTMLHeroes mini arcade! I promise it looks bad on purpose, I was going for an early 2000s "cool math games" type of vibe. Select one of our (4)?? games on our main page to start playing! (The rest are just placeholders to make it look nicer). Enjoy :D!</p>
      <div class="blocks">
          <img src="./images/etc/Untitled (13).png" alt="question block icon">
          <img src="./images/etc/Untitled (14).png" alt="question block icon">
          <img src="./images/etc/Untitled (15).png" alt="question block icon">
          <img src="./images/etc/Untitled (16).png" alt="question block icon">
      </div>
      </div>
  `);
  popup.document.close();
}
//event handlers at bottom of page
