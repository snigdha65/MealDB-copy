const loadMeals = () => {
    fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => console.log(data))
}
loadMeals()