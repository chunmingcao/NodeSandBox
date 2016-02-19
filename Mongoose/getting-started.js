//var db = monk('mongodb://test:test@ds033175.mongolab.com:33175/heroku_c8x6khp4');

var mongoose = require('mongoose');

console.info('--------------');
mongoose.connect('mongodb://test:test@ds033175.mongolab.com:33175/heroku_c8x6khp4');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', console.info.bind(console, 'connection success'));

console.info('--------------');

// With Mongoose, everything is derived from a Schema
var kittySchema = mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function(){
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

/*
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
*/

// Compiling our schema into a Model
// A model is a class with which we construct documents. 
// In this case, each document will be a kitten with properties 
// and behaviors as declared in our schema.
var Kitten  = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({name: 'Hello Kitty'});
//console.log(silence.name);
//silence.speak();

silence.save(function(err, silence){
   if(err){
       console.log('#######');
       return console.error(err);
    }
    console.log('####---###');
    silence.speak(); 
});

console.log('####-end--###');

Kitten.find(function(err, kittens){
    if(err) return console.error(err);
    console.log(kittens);
});

Kitten.find({name: /^S/}, function(err, kittens){
    if(err) return console.error(err);
    console.log(kittens);
});

// MongoDB supports secondary indexes. 
// With mongoose, we define these indexes within our Schema at the path level or the schema level. 
// Defining indexes at the schema level is necessary when creating compound indexes.
var animalSchema = mongoose.Schema({
  name: String,
  type: String
  //tags: { type: [String], index: true } // field level
});

//animalSchema.set('autoIndex', false); //
animalSchema.index({ name: 1, type: -1 }); // schema level

var Animal = mongoose.model('Animal', animalSchema);
var wanwan = new Animal({name: 'wanwan', type: 'dog'});

wanwan.save(function(err, wanwan){
    if(err)
        console.log('save err');
    console.log(wanwan);
});
