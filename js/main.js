if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.header.helpers({
    logo: '<img src="http://tutorthepeople.com/wp-content/uploads/tutorthepeoplelogo.png">'
  });

  Template.carousel.rendered = function() {
    $('#carousel').slick({
      dots: true,
      arrows: true
    });
  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
