// const User = require('./User');
const Pet = require("./Pet");
const Category = require("./Category");
// const AdoptionDate = require('./adoption-date');
const AdoptionCenter = require("./AdoptionCenter");
const User = require("./User");

Pet.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Pet, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

AdoptionCenter.hasMany(Pet, {
  foreignKey: "adoption_center_id",
  onDelete: "CASCADE",
});

Pet.belongsTo(AdoptionCenter, {
  foreignKey: "adoption_center_id",
});

module.exports = { Pet, Category, AdoptionCenter, User };
