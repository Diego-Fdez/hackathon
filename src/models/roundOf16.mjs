import mongoose from 'mongoose';

const RoundOf16Schema = mongoose.Schema(
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

const RoundOf16Model = mongoose.model('RoundOf16', RoundOf16Schema);
export default RoundOf16Model;
