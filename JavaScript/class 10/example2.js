const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments/1";

// const fetchMyData = (url) => {
//   fetch(url)
//     .then((data) => data.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// fetchMyData(COMMENT_URL);

const myfetchData = (url) => {
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log(error));
};

const fetchPost = myfetchData(POST_URL);
const fetchUser = myfetchData(USER_URL);
const fetchComment = myfetchData(COMMENT_URL);

// parallel
// console.log(fetchPost.then((data) => console.log(data)));
// console.log(fetchUser.then((data) => console.log(data)));
// console.log(fetchComment.then((data) => console.log(data)));

// series
// myfetchData(POST_URL)
//   .then((data) => {
//     console.log(data);
//     return myfetchData(USER_URL);
//   })
//   .then((data) => {
//     console.log(data);
//     return myfetchData(COMMENT_URL);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//series
// async function getAllInformation() {
//   try {
//     const userData = await myfetchData(USER_URL);
//     const postData = await myfetchData(POST_URL);
//     const commentData = await myfetchData(COMMENT_URL);
//     console.log(userData);
//     console.log(postData);
//     console.log(commentData);
//   } catch (err) {
//     console.log(err);
//   }
// }

getAllInformation();

// parallel
async function getAllInformation() {
  try {
    const data = await Promise.all([
      myfetchData(USER_URL),
      myfetchData(POST_URL),
      myfetchData(COMMENT_URL),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
