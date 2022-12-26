import express from 'express'
///import Products from '../../common/mock-data/products.json'
//import Customers from '../../common/mock-data/products.json' assert { type: "json" };
import MembershipController from './controllers/membership.controller.js';
import { createValidator } from 'express-joi-validation';
import { CreateMembershipDto } from './dto/create-membership.dto.js';
import { UpdateMembershipDto } from './dto/update-membership.dto.js';
import { DeleteMembershipDto } from './dto/delete-membership.dto.js';


const MembershipRouter = express.Router()
const validator = createValidator({})

MembershipRouter.get('/', MembershipController.getMembership)
MembershipRouter.get('/:id', MembershipController.getMembershipById)
MembershipRouter.post('/', validator.body(CreateMembershipDto), MembershipController.createMembership)
MembershipRouter.put('/:id', validator.body(UpdateMembershipDto), MembershipController.updateMembership)
MembershipRouter.delete('/:id', validator.body(DeleteMembershipDto), MembershipController.deleteMembershipById)

export default MembershipRouter