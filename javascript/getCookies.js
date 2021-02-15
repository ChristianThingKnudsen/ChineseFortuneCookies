function getFortune(url) {  
  console.log(url);
  fetch(url).then(res => {
    res.text().then(t => {
      document.getElementById("1234").innerHTML = t;
    })
  })
}
