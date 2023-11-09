
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Aman", age: 25 };
      resolve(data);
    }, 1000);
  });
}

fetchUserData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

async function getUserData() {
  try {
    const data = await fetchUserData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUserData();
