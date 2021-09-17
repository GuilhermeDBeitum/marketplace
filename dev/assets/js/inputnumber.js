(function ($) {
  $.fn.imputNumbers = function (options) {
    let settings = $.extend(
      {
        upClass: "default",
        downClass: "default",
        upText: "+",
        downText: "-",
        center: true,
      },
      options
    );

    return this.each(function (e) {
      let self = $(this);
      let clone = self.clone(true, true);

      let min = self.attr("min");
      let max = self.attr("max");
      let step = parseInt(self.attr("step")) || 1;

      function setText(n) {
        if (isNaN(n) || (min && n < min) || (max && n > max)) {
          return false;
        }

        clone.focus().val(n);
        clone.trigger("change");
        return true;
      }

      let group = $("<div class='input-group'></div>");
      let down = $("<button type='button'>" + settings.downText + "</button>")
        .attr("class", "btn btn-" + settings.downClass)
        .click(function () {
          setText(parseInt(clone.val() || clone.attr("value")) - step);
        });
      let up = $("<button type='button'>" + settings.upText + "</button>")
        .attr("class", "btn btn-" + settings.upClass)
        .click(function () {
          setText(parseInt(clone.val() || clone.attr("value")) + step);
        });
      $("<span class='input-group-btn'></span>").append(down).appendTo(group);
      clone.appendTo(group);
      if (clone && settings.center) {
        clone.css("text-align", "center");
      }
      $("<span class='input-group-btn'></span>").append(up).appendTo(group);

      clone.prop("type", "text").keydown(function (e) {
        if (
          $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
          (e.keyCode == 65 && e.ctrlKey === true) ||
          (e.keyCode >= 35 && e.keyCode <= 39)
        ) {
          return;
        }
        if (
          (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
          (e.keyCode < 96 || e.keyCode > 105)
        ) {
          e.preventDefault();
        }

        let c = String.fromCharCode(e.which);
        let n = parseInt(clone.val() + c);

        if ((min && n < min) || (max && n > max)) {
          e.preventDefault();
        }
      });

      self.replaceWith(group);
    });
  };
})(jQuery);
