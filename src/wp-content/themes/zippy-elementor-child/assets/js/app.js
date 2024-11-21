$(document).ready(function ($) {
  //Trigger next button
  handleStep1();
  handleStep2();
  function handleStep1() {
    const discribes_button = $(".elementor-field-group-industry")
      .children(".elementor-field-subgroup")
      .find("label");

    discribes_button.each((index, ele) => {
      $(ele).on("click", function () {
        // console.log($(this));
        $(".elementor-field-group-step_1")
          .find(".e-form__buttons__wrapper__button-next")
          .trigger("click");
      });
    });
  }

  function handleStep2() {
    const discribes_button = $(".elementor-field-group-increase_sales")
      .children(".elementor-field-subgroup")
      .find("label");

    discribes_button.each((index, ele) => {
      $(ele).on("click", function () {
        console.log($(this));
        $(".elementor-field-group-step_2")
          .find(".e-form__buttons__wrapper__button-next")
          .trigger("click");
      });
    });
  }

  // Run the function after 3 seconds (3000 milliseconds)
  // setTimeout(myFunction, 1000);
});
