"use strict"


function addReview(name, review){

    const reviews = getReviews(name);
    reviews.push(review);
    saveReviews(reviews);
}
function getReviews(key){

    const data = localStorage.getItem(key )
    if (data === null) {
        return []
    }
    return JSON.parse(data)
}
function saveReviews(reviews){
    const value =  JSON.stringify(reviews)
    localStorage.setItem(nameProd.value, value)
}