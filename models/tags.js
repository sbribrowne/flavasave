module.exports = function(sequelize, DataTypes){
    var Tag = sequelize.define("Tag", { //Tag is TABLE name
        // Name
        tag_name:{ 
          type: DataTypes.STRING
        }

      });

      Tag.associate = function(models) {
        // We're saying that a Tag should belong to an Recipe
        // A Tag can't be created without an Recipe due to the foreign key constraint
        Tag.belongsTo(models.Recipe, {
          foreignKey: {
            allowNull: false,
            onDelete: "cascade"
          }
        });
      };

      return Tag;
};