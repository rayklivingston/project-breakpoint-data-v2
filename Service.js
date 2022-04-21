export async function geturl() {

    const response = await fetch('/test');
    //const response = await fetch('../Server/routes/app.js');
    return await response.json();
}

export async function createprofile(data) {
    const response = await fetch(`../Server/routes/app.js`, {
       // const response = await fetch(`/post`, {
    method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}