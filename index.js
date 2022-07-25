let count=0
let likeNum = document.getElementById("like-num")
let imageContainer=document.getElementById("image-container")
let userAavatar=document.getElementById("user-avatar")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "assets/avatar.png",
        post: "assets/post-image.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    } ]


function render_like() {
    count += 1
    likeNum.innerHTML=
    `<p id="like-num">${count} likes</p>`
}

function render_images(){
    imageContainer.innerHTML = `<img src="${posts[0].post}" id="van-goh" alt="">`
    userAavatar.innerHTML = `<img src="${posts[0].avatar}" id="avatar" alt="">`
}

render_images()