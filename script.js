console.log('Il file javascript funziona')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('opzione-tema')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Hai scelto il tema:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('stile-tema').href = 'default.css'
	}

	if(mode == 'dark'){
		document.getElementById('stile-tema').href = 'dark.css'
	}
	localStorage.setItem('theme', mode)
}