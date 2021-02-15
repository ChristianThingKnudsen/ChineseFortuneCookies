async function get() {
    console.log("Hej med dig")
    const res = await fetch("url");

    document.getElementById("123").innerHTML = res;
    
}

document.getElementById("1234").addEventListener("onclick", () => { get(); }
)
