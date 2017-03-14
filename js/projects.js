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

Project.prototype.handlebars = function() {
  var source = $('#template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
}

if (!localStorage['projectData']) { // data is not found in localStorage
  $.ajax({
    type: 'GET',
    url: '../projectData.json',
    success: function(fetch) {
      fetch.forEach(function(ele) {
        projectArray.push(new Project(ele));
      });
      localStorage['projectData'] = JSON.stringify(projectArray);
    }

  }); //ajax
} else {
  JSON.parse(localStorage['projectData']).forEach(function(ele) {
    projectArray.push(new Project(ele));
  });
}





$(document).ready(function() {
  console.log('document.ready');

  projectArray.forEach(function(currentValue) {
    console.log('projectArray.forEach');
    $('#sub-header').append(currentValue.handlebars());
  });
});