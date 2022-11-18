import mongoose from 'mongoose';

const VotesSchema = mongoose.Schema(
  {
    champion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const VotesModel = mongoose.model('Votes', VotesSchema);
export default VotesModel;
