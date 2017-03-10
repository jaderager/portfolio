var projectData = [
  {
    heading: 'Salmon Cookies',
    description: 'Salmon Cookies was a mockup for an implausible business idea meant to provide some practice for fixed layouts and DOM tree manipulation.',
    url: 'https://jaderager.github.io/cookie_stand/',
  },
  {
    heading: 'Bus-Mall',
    description: 'Bus-Mall was an exercise in javascript and library use.',
    url: 'https://jaderager.github.io/bus-mall/',
  },
  {
    heading: 'Beer Buddies',
    description: 'Beer Buddies was a collaborative project which built github workflow skills as well as team skills.',
    url: 'https://jaderager.github.io/beer_buddies/',
  },
]

var projectArray = [];

var Project = function(options) {
  this.heading = options.heading;
  this.description = options.description;
  this.url = options.url;
}

Project.prototype.genProjectHtml = function() {
  var $template = $('article.template').clone();
  $template.find('h2').text(this.heading);
  $template.find('p').text(this.description);
  $template.find('a').attr('href', this.url);
  $template.removeClass('template').removeClass('hide');
  return $template;
}

projectData.forEach(function(ele) {
  projectArray.push(new Project(ele));
});



$(document).ready(function() {
  console.log('document.ready');

  projectArray.forEach(function(currentValue) {
    console.log('projectArray.forEach');
    $('#sub-header').append(currentValue.genProjectHtml());
  });
});