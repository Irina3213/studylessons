$(function () {
  $("#rateYo").rateYo({
    rating: 3.6,
    starWidth: "40px",
    normalFill: "#A0A0A0",
    ratedFill: "#E74C3C",
    numStars: 10,
    minValue: 1,
    maxValue: 10,
    precision: 2,
    onSet: function (rating, rateYoInstance) {
      alert("Rating is set to: " + rating);
    },
  });
});
