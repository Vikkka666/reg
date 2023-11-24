
const usernameRegex = /^[a-zA-Z]{1,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



function nameShowResult(elementId, isValid) {
  const resultElement = document.getElementById(elementId);
  if (isValid) {
    resultElement.textContent = "Готово";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Имя должно состоять только из латинских букв от 1 до 20 символов";
    resultElement.style.color = "red";
  }
}



function emailShowResult(elementId, isValid) {
    const resultElement = document.getElementById(elementId);
    if (isValid) {
      resultElement.textContent = "Готово";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Неправильно набран email";
      resultElement.style.color = "red";
    }
  }



  function passwordShowResult(elementId, isValid) {
    const resultElement = document.getElementById(elementId);
    if (isValid) {
      resultElement.textContent = "Готово";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Не подходящий пароль";
      resultElement.style.color = "red";
    }
  }


document.getElementById("button").addEventListener("click", function() {
  const usernameInput = document.getElementById("name");
  const username = usernameInput.value.trim();
  const useremailInput = document.getElementById("email");
  const useremail = useremailInput.value.trim();


  nameShowResult("p_name", usernameRegex.test(username));
  emailShowResult("p_email", emailRegex.test(useremail));

});
