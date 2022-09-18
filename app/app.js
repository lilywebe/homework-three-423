function initListeners() {
  $("#submit").click((e) => {
    let allUsers = JSON.parse(localStorage.getItem("Person"));
    e.preventDefault();
    let fn = $("#fname").val();
    let ln = $("#lname").val();
    let bd = $("#age").val();
    let em = $("#email").val();
    let ph = $("#phone").val();
    let cl = $("#classes").val();

    let classesarray = cl.split(",");

    if (
      fn != "" &&
      ln != "" &&
      bd !== "" &&
      em !== "" &&
      ph !== "" &&
      cl !== ""
    ) {
      let userObj = {
        fname: fn,
        lname: ln,
        age: bd,
        email: em,
        phone: ph,
        classes: classesarray,
      };

      console.log(allUsers);

      allUsers.push(userObj);

      localStorage.setItem("Person", JSON.stringify(allUsers));
      console.log(localStorage.getItem("Person"));

      $("#fname").val("");
      $("#lname").val("");
      $("#age").val("");
      $("#email").val("");
      $("#phone").val("");
      $("#classes").val("");
    } else {
      alert("please enter all values");
    }
  });

  $("#getName").click((e) => {
    $("#app").html("");
    e.preventDefault();
    allUsers = JSON.parse(localStorage.getItem("Person"));

    // for (let i = 0; i < allUsers.length; i++) {
    //   console.log(allUsers[i].fname);
    // }

    $.each(allUsers, function (idx, user) {
      console.log(user.fname);
      console.log(user.lname);
      $("#app").append(
        `<h3 class="person-label">Person ${idx + 1}</h3><p>Name: ${
          user.fname
        } ${user.lname}</p> <p>Age: ${user.age}</p> <p>Email: ${
          user.email
        }</p> <p>Phone Number: ${user.phone}</p><p>Classes: </p>`
      );
      $.each(user.classes, function (idx, classsingular) {
        $("#app").append(`<li class="indclass">${classsingular}</li>`);
      });
    });
  });
}

function initSite() {
  if (localStorage) {
    let people = localStorage.getItem("Person");

    if (people) {
      console.log("yes");
      let persons = JSON.parse(localStorage.getItem("Person"));
      console.log(persons);
    } else {
      localStorage.setItem("Person", "[]");
      alert("no people added yet");
    }
    // console.log("I have it");
    // localStorage.setItem("Person", JSON.stringify(userObj));
    // console.log(localStorage.getItem("Person"));
    // let retrievedObj = JSON.parse(localStorage.getItem("Person"));
    // console.log(retrievedObj);
  } else {
    console.log("no local storage");
  }
}

$(document).ready(function () {
  initListeners();
  initSite();
});
