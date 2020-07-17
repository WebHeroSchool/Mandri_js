let urlStr = window.location.search;
console.log(urlStr);
const paramName = 'username';
let userName =  urlStr.substr(urlStr.indexOf(paramName, 0) + paramName.length + 1);
console.log(userName);
let urlGit = 'https://api.github.com/users/' + userName;
console.log(urlStr);

fetch(urlGit)
	.then(res => res.json())
	.then(json => {
		if (json.name !== undefined) {
			var h2 = document.createElement('h2');
			h2.innerHTML = '<a href=' + json.html_url + '>' + json.name + '</a>';
			document.body.appendChild(h2);

			var div = document.createElement('div');
			div.innerHTML = json.bio;
			document.body.appendChild(div);
			
			var img = document.createElement('img');
			img.src = json.avatar_url;
			document.body.appendChild(img);
		}
		else {
			var div = document.createElement('div');
			div.innerHTML = 'Информация о пользователе не доступна';
			document.body.appendChild(div);
		}
	});