const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

function adjustFooterMargin() {
  let wrapperHeight = $(".wrapper").height();
  let requiredHeight =
    $(window).height() - wrapperHeight - $("footer").height();
  if (requiredHeight >= 0) {
    $("footer").css("margin-top", requiredHeight);
  }
}
$(document).ready(() => {
  adjustFooterMargin();
});
$(window).resize(() => {
  adjustFooterMargin();
});
