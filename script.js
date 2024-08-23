//your code here
const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', function() {
        draggedElement = this;
    });

    draggable.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    draggable.addEventListener('drop', function() {
        if (draggedElement !== this) {
            // Swap the background images
            let tempBg = this.style.backgroundImage;
            this.style.backgroundImage = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = tempBg;
        }
    });
});
