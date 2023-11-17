function newImage(imgPath, lPos, bPos) {
    let imageNew = document.createElement('img')
    imageNew.src = imgPath
    imageNew.style.position = 'fixed'
    imageNew.style.left = lPos
    imageNew.style.bottom = bPos
    document.body.append(imageNew)
}
newImage('assets/green-character/static.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')



// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })