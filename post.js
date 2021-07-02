const postData = [
  {
    authorName: "piyush",
    tittle: "Hello there! This is Post 1.",
    sumamry:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    authorName: "prince",
    tittle: "Hello there! This is Post 2.",
    sumamry:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    authorName: "kishan",
    tittle: "Hello there! This is Post 3.",
    sumamry:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    authorName: "rajan",
    tittle: "Hello there! This is Post 4.",
    sumamry:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    authorName: "sonu",
    tittle: "Hello there! This is Post 5.",
    sumamry:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
];

const signUpClickHandler = () => {
  const modal = document.getElementById("sign-up-modal");
  modal.style.display = "flex";
};
const closeSignUpClickHandler = () => {
  const modal = document.getElementById("sign-up-modal");
  modal.style.display = "";
};
const signInClickHandler = () => {
  const modal = document.getElementById("sign-in-modal");
  modal.style.display = "flex";
};
const closeSignInClickHandler = () => {
  const modal = document.getElementById("sign-in-modal");
  modal.style.display = "";
};

let postDataState;
let lastDelete = [];
let addingPost = [];

const addPostContent = (data = postData) => {
  console.log("on load");
  const postContainer = document.getElementsByClassName("main-container")[0];
  data.forEach((post, index) => {
    const { tittle, authorName, sumamry } = post;
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
            <div class="author-container">
                <h5>${authorName}</h5>
            </div>
            <div class="post-container">
                <div>
                    <h3>${tittle}</h3>
                </div>
                <p>
                    ${sumamry}
                </p>
                <i class="fa fa-trash trash-icon" aria-hidden="true" onclick="deletePost(${index})"></i>
                <i class="fa fa-ellipsis-h ellipsis-icon" aria-hidden="true"></i>
    
            </div>`;
    postContainer.appendChild(cardDiv);
  });
  postDataState = data;
};

const removeAllElements = (className) => {
  const element = document.getElementsByClassName(className)[0];
  element.innerHTML = "";
};

const deletePost = (index) => {
  lastDelete.push(postDataState.filter((item, i) => i === index)[0]);
  const newPostData = postDataState.filter((item, i) => i !== index);
  removeAllElements("main-container");
  addPostContent(newPostData);
};

const addAllElementClickHandler = () => {
  console.log("addAllElements");
  removeAllElements("main-container");
  addPostContent(postData);
  lastDelete = [];
};
const undoClickHandler = () => {
  const newPostData = [...postDataState];

  if (lastDelete.length > 0) {
    newPostData.push(lastDelete[lastDelete.length - 1]);
    lastDelete.length--;
  }

  removeAllElements("main-container");
  addPostContent(newPostData);
};
const addPostClickHandler = () => {
  const modal = document.getElementById("add-post");
  modal.style.display = "flex";
};

const closeAddPostClickHandler = () => {
  const modal = document.getElementById("add-post");
  modal.style.display = "";
};
const savePostClickHandler = () => {
  const inputPost = document.getElementsByClassName("post-input");
  const inputPostData = {
    authorName: inputPost[0].value,
    tittle: inputPost[1].value,
    sumamry: inputPost[2].value,
  };
  const newPostData = [...postDataState];
  newPostData.push(inputPostData);
  removeAllElements("main-container");
  addPostContent(newPostData);
  closeAddPostClickHandler();
};
