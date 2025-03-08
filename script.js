function toggleRecipe() {
    var recipe = document.getElementById("recipe");
    if (recipe.style.display === "none") {
        recipe.style.display = "block";
    } else {
        recipe.style.display = "none";
    }
}