const app = {};

app.getMeals = function(searchQuery) {
    $.ajax({
      url: 'https://www.themealdb.com/api/json/v1/1/search.php',
      method: 'GET',
      dataType: 'json',
      data: {
        s: searchQuery
    }
    }).then(function(results) {
      console.log(results.meals);
      $('.results').empty();
     app.displayMeals(results.meals);
    })
  }

  app.displayMeals = function(mealArray) {
    mealArray.forEach( function(mealObj){
        console.log(mealObj);
        const mealHTML = `
        <div class="meal-box">
            <div class="meal-box">
             <img src="${mealObj.strMealThumb}" alt="${mealObj.strMeal}">
            </div>
            <a href="${mealObj.strYoutube}" target="_blank" class="button">
            <p class="meal-title">${mealObj.strMeal}</p></a>
        </div>
        `
        $('.results').append(mealHTML);
    })
}

  app.init = function() {
    $('form').on('submit', function(event){
        event.preventDefault();
        const userSearch = $('input').val();
        app.getMeals(userSearch);
        })
}

$(document).ready(function(){
    app.init();
})