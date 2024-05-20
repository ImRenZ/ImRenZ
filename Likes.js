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

addItem("Eating");
addItem("Dogs");
addItem("Games");
addItem("M1 Abraham Tank");
addItem("Nato Standard Mag 9.22mm");
addItem("Friends");

function displayLikes() {
  console.log("Likes:");
 for (let i = 0; i < Likes.length; i++) {
      console.log((i + 1) + ". " + Likes[i]);
    }
  }
  
removeItem("Nato Standard Mag 9.22mm");
removeItem("M1 Abraham Tank");

displayLikes();
