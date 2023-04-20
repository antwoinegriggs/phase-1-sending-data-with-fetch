// Add your code here
function submitData(userName, userEmail) {
  let data = {
    name: userName,
    email: userEmail,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML = `${data.id}`;
    })
    .catch((error) => {
      console.log(error.message);
      document.body.innerHTML = error.message;
    });
}
