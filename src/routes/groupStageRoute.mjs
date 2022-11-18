import express from 'express';
import {
  createGroupStage,
  getGroupStage,
} from '../controllers/groupStageController.mjs';

const router = express.Router();

router.post('/create', createGroupStage);
router.get('/groupStage', getGroupStage);

export default router;
