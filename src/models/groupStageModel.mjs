import mongoose from 'mongoose';

const GroupStageSchema = mongoose.Schema(
  {
    teams: [
      {
        numberGroup: {
          type: String,
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

const GroupStageModel = mongoose.model('GroupStage', GroupStageSchema);
export default GroupStageModel;
