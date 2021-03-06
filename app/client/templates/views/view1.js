/**
Template Controllers

@module Templates
*/

/**
The view1 template

@class [template] views_view1
@constructor
*/

Template['views_view1'].helpers({
    /**
    Get the name

    @method (name)
    */

    'name': function(){
        return this.name || TAPi18n.__('dapp.view1.defaultName');
    }
});

Template['views_view1'].created = function(){
	Meta.setSuffix(TAPi18n.__("dapp.view1.title"));
};
