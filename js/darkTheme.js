let darkTheme = false

// Функция для сохранения задач в localStorage

// Функция для загрузки задач из localStorage
function loadFromLocalStorage() {
	// Загружаем состояние темы
	const savedTheme = localStorage.getItem('darkTheme') === 'true' // Преобразуем строку в boolean
	if (savedTheme !== true) {
		// Если тема тёмная, применяем её
		darkTheme = true
	} else {
		darkTheme = false
	}
	changeTheme() // Вызываем toggleTheme для применения тёмной темы
}

function changeTheme() {
	const iconImage = document.querySelector('.theme-btn')
	const root = document.documentElement

	// Меняем изображение и цвета
	if (darkTheme === false) {
		iconImage.src = 'img/brightness.png' // Путь к изображению для ночной темы
		iconImage.style.filter = 'invert(1)'
		root.style.setProperty('--bg-color', '#111111')
		root.style.setProperty('--text-color', 'white')
		root.style.setProperty('--glow-color', '#ff4f2e')
		root.style.setProperty('--history-color', 'rgba(255, 255, 255, 0.5)')
		root.style.setProperty('--span-color', 'var(--color2)')

		darkTheme = true
	} else if (darkTheme === true) {
		iconImage.src = 'img/night-mode.png' // Путь к изображению для дневной темы
		iconImage.style.filter = 'invert(0)'
		root.style.setProperty('--bg-color', '#efefef')
		root.style.setProperty('--text-color', 'black')
		root.style.setProperty('--glow-color', '#42b8d4')
		root.style.setProperty('--history-color', 'rgba(0, 0, 0, 0.5)')
		root.style.setProperty('--span-color', 'var(--color1)')

		darkTheme = false
	}
	console.log(darkTheme)
	localStorage.setItem('darkTheme', darkTheme)
}
// Загружаем задачи при загрузке страницы
window.addEventListener('load', () => {
	loadFromLocalStorage()
})
