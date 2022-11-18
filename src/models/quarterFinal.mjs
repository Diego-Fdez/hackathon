import mongoose from 'mongoose';

const QuarterFinalSchema = mongoose.Schema(
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
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QuarterFinalModel = mongoose.model('QuarterFinal', QuarterFinalSchema);
export default QuarterFinalModel;
