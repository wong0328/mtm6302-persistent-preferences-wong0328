const animals = ["cat", "dog", "pig", "fish", "cow"]


const $container = document.getElementById ('animal') 

const list = []
    for (let i = 0; i < animals.length; i++){
        list.push  (`<li>${animals[i]}</li>`)
    }
console.log(list)
$container.innerHTML = list.join ('')






const sizes = ["small", "medium", "large"]
const $dropdown = document.getElementById ('sizes') 

const dropdown = []
    for (let i = 0; i < sizes.length; i++){
        dropdown.push  (`<option>${sizes[i]}</option>`)
    }
        


    $dropdown.innerHTML = dropdown.join ('')




    $dropdown.addEventListener('change', function(event){
        localStorage.setItem('size', event.target.value)
        $container.className = event.target.value

    })

    if (localStorage.getItem('size')) {
        $container.className = 
          localStorage.getItem('size')
      $dropdown.value = localStorage.getItem('size')
      }







    const theme = ["light", "dark"]
const $theme = document.getElementById ('colours') 

const background = []
    for (let i = 0; i < theme.length; i++){
        background.push  (`<option>${theme[i]}</option>`)
    }

    $theme.innerHTML = background.join ('')
    // if (localStorage.getItem('theme)) {
    // //     count = 
    // //       localStorage.getItem('theme')
    // //   save()
    //   }




    $theme.addEventListener('change', function(event){
        localStorage.setItem('colours', event.target.value)
        document.querySelector('body').className = event.target.value

    })

    if (localStorage.getItem('colours')) {
        $container.className = 
          localStorage.getItem('colours')
      $theme.value = localStorage.getItem('colours')
      }