import GroupStageModel from '../models/groupStageModel.mjs';

export const createGroupStage = async (req, res) => {
  const groupStage = new GroupStageModel(req.body);
  try {
    await groupStage.save();
    res.status(201).send({ status: 'OK', message: 'Vote saved successfully' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

export const getGroupStage = async (req, res) => {
  const { numberGroup } = req.body;
  try {
    const groupStage = await GroupStageModel.find({ numberGroup });
    let teams = {};
    groupStage.map((group) => {
      const teamName = group.team;
      if (!teams[teamName]) teams[teamName] = [];
      teams[teamName].push({
        goalsFor: group.goalsFor,
        goalsAgainst: group.goalsAgainst,
      });
    });
    console.log(
      [teams].map((team) => {
        return team.goalsFor;
      })
    );
    res.status(200).send({ status: 'OK', data: teams });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};
