function getFortune() {  
  const url = window.location.href;
  console.log(url);
  fetch(url+"cookies").then(res => {
    res.text().then(t => {
      document.getElementById("1234").innerHTML = t;
    })
  })
}
