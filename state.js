const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currentState = state;
  };
};

const homeState = function(page) {
  console.log("home");
};

const aboutState = function(page) {
  console.log("about");
};

const contanctState = function(page) {
  console.log("contanct");
};

const testState = function(page) {
  console.log("test");
};

const page = new PageState();

//page.init();

const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact"),
  test = document.getElementById("test");

home.addEventListener("click", e => {
  page.change(new homeState());
  e.preventDefault;
});

about.addEventListener("click", e => {
  page.change(new aboutState());
  e.preventDefault;
});

contact.addEventListener("click", e => {
  page.change(new contanctState());
  e.preventDefault;
});

test.addEventListener("click", e => {
  page.change(new testState());
  e.preventDefault;
});
