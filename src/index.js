const menu = document.getElementById("ramen-menu")

const renderImg = (ramen) => {
    const img = document.createElement("img")
    img.src = ramen.image
    menu.append(img)

    img.addEventListener("click", (e) => {
        const detailImg = document.querySelector(".detail-image")
        const name = document.querySelector(".name")
        const rest = document.querySelector(".restaurant")
        const rating = document.querySelector("#rating-display")
        const comment = document.querySelector("#comment-display")

        detailImg.src = ramen.image
        name.innerText = ramen.name
        rest.innerText = ramen.restaurant
        rating.innerText = ramen.rating
        comment.innerText = ramen.comment
    })
}

document.addEventListener("DOMContentLoaded", (e) => {
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramenData => {
        ramenData.forEach(ramen => renderImg(ramen))
    })
})

const form = document.getElementById("new-ramen")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nameInput = e.target.querySelector("#new-name").value
    const restInput = e.target.querySelector("#new-restaurant").value
    const imageInput = e.target.querySelector("#new-image").value
    const ratingInput = e.target.querySelector("#new-rating").value
    const commentInput = e.target.querySelector("#new-comment").value
    
    const img = document.createElement("img")
    img.src = imageInput
    menu.append(img)

    img.addEventListener("click", (e) => {
        const detailImg = document.querySelector(".detail-image")
        const name = document.querySelector(".name")
        const rest = document.querySelector(".restaurant")
        const rating = document.querySelector("#rating-display")
        const comment = document.querySelector("#comment-display")

        detailImg.src = imageInput
        name.innerText = nameInput
        rest.innerText = restInput
        rating.innerText = ratingInput
        comment.innerText = commentInput
    })
})