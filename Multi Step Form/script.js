var current = 0;

function _i(id) {
    return document.getElementById(id);
}

function _t(tg) {
    return document.getElementsByTagName(tg);
}

function showTab(n) {
    var tab = _i("container").getElementsByTagName("div");
    tab[n].style.display = "block";
    if (n == 0) {
        _i("prev").style.display = "none";
    }
    else {
        _i("prev").style.display = "inline";
    }
    if (n == 2) {
        _i("next").innerHTML = "Submit";
    }
    else {
        _i("next").innerHTML = "Next";
    }
    changeProgress(current);
}
// console.log(showTab)

function changeProgress(n) {
    var pro = _t("li");
    pro[n].className += " active";
}

function nextPrev(n) {
    var tab = _i("container").getElementsByTagName("div");
    if (n == 1 && !validateForm()) {
        return false;
    }
    tab[current].style.display = "none";
    current = current + n;
    if (current == 3) {
        _i("next").disabled = true;
        _i("next").style.background = "#FFFC00";
        current = 2;
    }
    else {
        _i("next").disabled = false;
        _i("next").style.background = "#CD201F";
    }
    var pro = _t("li");
    for (var i = 0; i < 3; i++) {
        pro[i].style.fontWeight = "100";
    }
    pro[current].style.fontWeight = "900";
    showTab(current);
}

function validateForm() {
    var tab, inp, valid = true;
    tab = _i("container").getElementsByTagName("div");
    inp = tab[current].getElementsByTagName("input");
    if (current == 0) {
        if (inp[1].value != inp[2].value) {
            // inp[1].classList += "invalid";
            inp[1].classList.add("invalid");
            inp[2].classlist.add("invalid");
            valid = false;

        }
    }
    for (var i = 0; i < 3; i++) {
        if (inp[i].value == "") {
            inp[i].classlist.add("invalid");
            valid = false;
        }
    }
    return valid;
}


// //chat gpt on click function

// function submitForm() {
//     // Collect data from form fields
//     var name = _i("name").value;
//     var email = _i("email").value;
//     var password = _i("password").value;
  
//     // Create an object to hold the data
//     var data = {
//       name: name,
//       email: email,
//       password: password
//     };
  
//     // Call a function to send data to the database (e.g., using AJAX)
//     sendDataToDatabase(data);
//   }

  

//   function sendDataToDatabase(data) {
//     // Make an AJAX request to send data to the server
//     fetch('/your-api-endpoint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (response.ok) {
//         // Data successfully sent to the database
//         // You can handle success here
//       } else {
//         // Error occurred while sending data
//         // You can handle errors here
//       }
//     })
//     .catch(error => {
//       // Handle any network or other errors
//       console.error('Error:', error);
//     });
//   }
  