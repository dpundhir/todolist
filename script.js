var todos = []
var tobedone = []

function add() {
    var item = document.getElementById("ip").value
    var list = document.getElementById("test")

    if (tobedone.length == 0) {
        if(item.length != 0)
            document.getElementById("headq").style.display = "block";
    }
    if (item.length == 0)
        alert('Empty Input');

    else {
        if (tobedone.includes('li' + item))
            alert('Item already in list')

        else {
            list.innerHTML += `<li id='li${item}'>${item}</li>`
            tobedone.push('li' + item)
        }
    }

}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('test');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    todos.push(target.id);
    document.getElementById(target.id).style.textDecoration = "line-through";
};


function deleteel() {
    var el = new Set(todos)
    if (el.size == 0) {
        alert('Nothing Completed');
    }
    else {
        document.getElementById("head").style.display = "block";
        var list = document.getElementById("completed")
        todos = []
        el.forEach(element => {
            var item = document.getElementById(element)
            item.remove()
            el.delete(item)
            var index = tobedone.indexOf(element);
            if (index > -1) {
                tobedone.splice(index, 1);
            }
            list.innerHTML += `<li>${item.innerHTML}</li>`
        });

    }


}