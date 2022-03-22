const default_option_item = document.querySelector(".default_option .option"),
    default_option_text = default_option_item.querySelector(".text"),
    default_option_count = default_option_item.querySelector(".count");

const select_ul_item = document.querySelectorAll(".select_ul .option"),
    input_items = document.querySelectorAll(".select_ul .input");


// On clicking check box item
default_option_item.addEventListener("click", function () {
    // .closest() method, returns the nearst item that match our css selectors. 
  this.closest(".default_option").classList.toggle("active");// toggle active class
});

select_ul_item.forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.classList.toggle("active");// toggle active class

    if (item.classList.contains("active")) {
        // checked is the check box state
      item.children[0].checked = true;
    } else {
      item.children[0].checked = false;
    }

    // Now, let's show the number of selected check boxs
    var count = 0;
    input_items.forEach(input_item => {
      if (input_item.checked === true) {
        count += 1;
        default_option_count.style.display = "inline-block";
        default_option_count.textContent = count;
        default_option_text.textContent = "Items Selected";
      } else if (input_item.checked === false && count === 0) {
        default_option_count.style.display = "none";
        default_option_count.textContent = "";
        default_option_text.textContent = "Select";
      }
    });
  });
});
