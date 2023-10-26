const mongoose = require("mongoose");

// Check if the model already exists
if (mongoose.models && mongoose.models.Pool) {
  module.exports = mongoose.models.Pool;
} else {
  const poolSchema = new mongoose.Schema({
    poolName: String, // Name of the pool
    tokenAContractAddress: String, // Address of TokenA contract
    tokenBContractAddress: String, // Address of TokenB contract
    poolContractAddress: String, // Address of the pool contract
  });

  module.exports = mongoose.model("Pool", poolSchema);
}
