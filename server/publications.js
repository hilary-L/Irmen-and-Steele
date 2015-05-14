Meteor.publish('pieces', function() { return Pieces.find();
});

Meteor.publish('piecesmobile', function() { return PiecesMobile.find();
});