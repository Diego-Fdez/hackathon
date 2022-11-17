import mongoose from 'mongoose';

const SemiFinalSchema = mongoose.Schema(
  {
    teams: [
      {
        winnerNumber: {
          type: Number,
          required: true,
        },
        team: {
          type: String,
          required: true,
        },
        goalsFor: {
          type: Number,
          required: true,
        },
        goalsAgainst: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const SemiFinalModel = mongoose.model('SemiFinal', SemiFinalSchema);
export default SemiFinalModel;
