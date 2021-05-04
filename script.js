const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    // element.getBoundingClientRect returns a DOMRect (as in rectangle) object
    //providing information about the size of the object and
    //its position relative to the viewport
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
