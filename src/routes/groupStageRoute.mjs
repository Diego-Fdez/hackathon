import express from 'express';
import {
  getTeams,
  getTeamMatches,
  getCompetitionMatches,
  registerVote,
  getVotes,
} from '../controllers/groupStageController.mjs';

const router = express.Router();

router.get('/get-teams', getTeams);
router.get('/teams-matches/:teamId', getTeamMatches);
router.get('/competition-matches', getCompetitionMatches);
router.post('/vote', registerVote);
router.get('/votes', getVotes);

export default router;
