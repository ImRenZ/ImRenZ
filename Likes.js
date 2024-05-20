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

addItem("dogs");
addItem("cats");
addItem("parrots");
addItem("alligators");
addItem("spiders");
addItem("snakes");

function displayLikes() {
  console.log("Likes:");
 for (let i = 0; i < Likes.length; i++) {
      console.log((i + 1) + ". " + Likes[i]);
    }
  }
  
removeItem("spiders");
removeItem("alligators");

displayLikes();
