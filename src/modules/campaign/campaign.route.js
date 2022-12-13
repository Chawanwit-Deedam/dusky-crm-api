import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import CampaignController from './controllers/campaign.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateCampaignDto } from './dto/create-campaing.dto.js';
import { UpdateCampaignDto } from './dto/update-campaign.dto.js';
import { DeleteCampaignDto } from './dto/delete-campaign.dto.js';


const CampaignRouter = express.Router()
const validator = createValidator({})

CampaignRouter.get('/', CampaignController.getCampaign)
CampaignRouter.get('/:id', CampaignController.getCampaignById)
CampaignRouter.post('/', validator.body(CreateCampaignDto), CampaignController.createCampaign)
CampaignRouter.patch('/:id', validator.body(UpdateCampaignDto), CampaignController.updateCampaign)
CampaignRouter.delete('/', validator.body(DeleteCampaignDto), CampaignController.deleteCampaignById)

export default CampaignRouter