import mongoose from 'mongoose';

const VotesSchema = mongoose.Schema(
  {
    team: {
      type: String,
      required: true,
    },
    goalsOf: {
      type: Number,
      required: true,
    },
    goalsAgainst: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    champion: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const VotesModel = mongoose.model('Votes', VotesSchema);
export default VotesModel;
