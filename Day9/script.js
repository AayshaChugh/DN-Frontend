// let bookedSeatsElement = document.querySelector(`.booking-seats`);
// let remainingSeatsElement = document.querySelector(`.remaining-seats`);
// let seats = document.querySelectorAll(`.seat`);

// let bookedSeats = 0;
// let remainingSeats = seat.length;

// bookedSeatsElement.innerText = bookedSeats;
// remainingSeatsElement.innerText = remainingSeats;

// seat.forEach((book) => {
//   book.addEventListener(`click`, () => {
//     // console.log(`you clicked`);
//     book.classList.toggle(`booked`);
//     book.classList.contains(`booked`) ? bookedSeats(1) : bookedSeats(-1);
//   });
// });

// const bookedSeats = (s) => {
//   bookedSeats += 1 * s;
//   remainingSeats -= 1 * s;

//   bookedSeatsElement.innerText = bookedSeats;
//   remainingSeatsElement.innerText = remainingSeats;
// };
let bookedSeatsElement = document.querySelector(`.booking_seats`);
let remainingSeatsElement = document.querySelector(`.remaining_seats`);
let seats = document.querySelectorAll(`.seats`);

let bookedSeats = 0;
let reaminingSeats = seats.length;

bookedSeatsElement.innerText = bookedSeats;
remainingSeatsElement.innerText = reaminingSeats;

seats.forEach((seat) => {
  seat.addEventListener(`click`, () => {
    // console.log(`you clicked`);
    seat.classList.toggle(`booked`);
    seat.classList.contains(`booked`) ? bookeSeats(1) : bookeSeats(-1);
  });
});

const bookeSeats = (s) => {
  bookedSeats += 1 * s;
  reaminingSeats -= 1 * s;

  bookedSeatsElement.innerText = bookedSeats;
  remainingSeatsElement.innerText = reaminingSeats;
};
