import checkValueInputs from "./checkValueInputs";

const changeModalState = (state) => {
  const windowFrom = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  checkValueInputs("#width");
  checkValueInputs("#height");

  function bindActionToElems(event, elem, property) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[property] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0
                ? (state[property] = "Холодное")
                : (state[property] = "Тёплое");
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[property] = item.value;
            }
            break;
          case "SELECT":
            state[property] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowFrom, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
