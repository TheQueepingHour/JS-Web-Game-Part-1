function newImage(path, lPos, bPos) {
    let imageNew = document.createElement('img')
    imageNew.src = path
    imageNew.style.position = 'fixed'
    imageNew.style.left = lPos
    imageNew.style.bottom = bPos
    document.body.append(imageNew)
    return imageNew
}

function newItem(path, lPos, bPos) {
    let item = newImage(path, lPos, bPos)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}



newImage('assets/green-character/static.gif', '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png', '150px', '200px')
newImage('assets/well.png', '500px', '425px')

newItem('assets/sword.png', '500px', '405px')
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')