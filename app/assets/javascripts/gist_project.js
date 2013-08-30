window.GistProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var gists = JSON.parse($('#bootstrap_gists').html());
		console.log($('#bootstrap_gists').html());
		var favorites = JSON.parse($('#bootstrap_favorites').html());
		console.log($('#bootstrap_favorites').html());
		var current_user_id = parseInt($('#bootstrap_current_user_id').attr('data'));
		new GistProject.Routers.Gists({
			gists: new GistProject.Collections.Gists(gists),
			favorites : new GistProject.Collections.Favorites(favorites),
			current_user_id : current_user_id
		});
		Backbone.history.start();
  }
};

$(document).ready(function(){
  GistProject.initialize();
});
