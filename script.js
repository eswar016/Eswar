document.addEventListener("DOMContentLoaded", function () {
    var vegetarianToggle = document.getElementById("vegetarianToggle");
    vegetarianToggle.addEventListener("change", toggleVegetarian);

    // Initial state
    toggleVegetarian();

    // Add this code to populate images
    populateCategoryImages("snv", "categoryImagesStarters");
    populateCategoryImages("mnv", "categoryImagesMainCourses");
    populateCategoryImages("d1", "categoryImagesDesserts");
});

function toggleVegetarian() {
    var vegetarianToggle = document.getElementById("vegetarianToggle");
    var vegetarianItems = document.querySelectorAll(".menu-item.vegetarian");
    var nonVegetarianItems = document.querySelectorAll(".menu-item.non-vegetarian");

    if (vegetarianToggle.checked) {
        // Hide non-vegetarian items
        hideItems(nonVegetarianItems);
        // Show vegetarian items
        showItems(vegetarianItems);
    } else {
        // Show all items
        showItems(vegetarianItems);
        showItems(nonVegetarianItems);
    }
}

function hideItems(items) {
    items.forEach(function (item) {
        item.style.display = "none";
    });
}

function showItems(items) {
    items.forEach(function (item) {
        item.style.display = "block";
    });
}



