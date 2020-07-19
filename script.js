let urlStr = window.location.search;
const paramName = 'username';

let userName =  urlStr.substr(urlStr.indexOf(paramName, 0) + paramName.length + 1);

if (userName.length === 0) {
  userName = 'Mandri905'
};

let urlGit = 'https://api.github.com/users/' + userName;

fetch(urlGit)
  .then (res => {
    if (res.status == 404) {
	  let div = document.createElement('div');
	  div.innerHTML = 'Информация о пользователе ' + userName + ' не доступна';
	  document.body.appendChild(div);

	  throw `${res.status} ${res.statusText}`
  	}
  	else { 
  	  return (res.json())	
  	}
  })
  .then (json => {
  	let user = json.name;
  	if (user === null) user = userName;

  	let h2 = document.createElement('h2');
  	h2.innerHTML = '<a href=' + json.html_url + '>' + user + '</a>';
  	document.body.appendChild(h2);

  	let div = document.createElement('div');
  	div.innerHTML = json.bio;
 	document.body.appendChild(div);

  	let img = document.createElement('img');
  	img.src = json.avatar_url;
	document.body.appendChild(img);
  })
  .catch (err => {
    let div = document.createElement('div');
  	div.innerHTML = 'Ошибка: ' + err;
	document.body.appendChild(div);
  });