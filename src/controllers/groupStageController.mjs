import axios from 'axios';
import VotesModel from '../models/votesModel.mjs';

export const getTeams = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.football-data.org/v4/competitions/2000/teams`,
      {
        headers: {
          'X-Auth-Token': 'ca8697fbbd93497bad15bdbe63dafd29',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    res.json(data);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

export const getTeamMatches = async (req, res) => {
  const { teamId } = req.params;

  try {
    const { data } = await axios.get(
      `https://api.football-data.org/v4/teams/${teamId}/matches/`,
      {
        headers: {
          'X-Auth-Token': 'ca8697fbbd93497bad15bdbe63dafd29',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    res.json(data);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

export const getCompetitionMatches = async (req, res) => {
  const { competitionId } = req.body;
  try {
    const { data } = await axios.get(
      `https://api.football-data.org/v4/competitions/${competitionId}/matches`,
      {
        headers: {
          'X-Auth-Token': 'ca8697fbbd93497bad15bdbe63dafd29',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    res.send(data);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

export const registerVote = async (req, res) => {
  const newVote = new VotesModel(req.body);

  try {
    await newVote.save();
    res
      .status(201)
      .send({ status: 'OK', message: 'Vote register successfully!' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

export const getVotes = async (req, res) => {
  try {
    const votes = await VotesModel.find();
    res.json(votes);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};
