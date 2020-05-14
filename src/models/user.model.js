const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre de usuario es requerido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  email: {
    type: String,
    required: [true, "El email es requerido"],
  },
});

UserSchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

module.exports = model("user", UserSchema);
