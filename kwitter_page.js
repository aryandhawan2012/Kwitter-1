var firebaseConfig = {
    apiKey: "AIzaSyCvYYv3TQ5iTSzswWwbE9Kth6QAulWN0Fg",
    authDomain: "project-93-8a441.firebaseapp.com",
    projectId: "project-93-8a441",
    storageBucket: "project-93-8a441.appspot.com",
    messagingSenderId: "67386792507",
    appId: "1:67386792507:web:52d9cef9e4899cf5fada1e"
  };

  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("user_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}