let Likes = [];

function addItem(item) {
  Likes.push(item);
}

function removeItem(item) {
  const remove = Likes.indexOf(item);
  if (remove !== -1) {
    Likes.splice(remove, 1);
  }
}

addItem("wake up");
addItem("take a bath");
addItem("eat");
addItem("clean your teeth");
addItem("prepare important things");
addItem("going to school");

function displayLikes() {
  console.log("Likes:");
 for (let i = 0; i < Likes.length; i++) {
      console.log((i + 1) + ". " + Likes[i]);
    }
  }
  
removeItem("prepare important things");
removeItem("clean your teeth");

displayLikes();
