import * as Yup from 'yup';
import {
    startOfHour,
    parseISO,
    isBefore,
    format
} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import User from '../models/User';
import Appointment from '../models/Appointment';

class AppointmentsController {
    async index(req, res) {
        const { page = 1 } = req.query;
            
        const appointments = await Appointment.findAll({
            where: {
                user_id: req.userID,
                canceled_at: null
            },
            order: ['date'],
            attributes: ['id', 'date'],
            limit: 3,
            offset: (page -1) * 3,
            include: [{
                model: User,
                as: 'collaborator',
                attributes: ['id', 'name'],
            }]
        })

        return res.status(200).json({
            register: page,
            appointments: appointments
        });
    }

    async store(req, res) {

        const schema = Yup.object().shape({
            collaborator_id: Yup.number().required(),
            date: Yup.date().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                message: 'Dados inválidos'
            })
        }

        const {
            collaborator_id,
            date
        } = req.body;

        const isCollaborator = await User.findOne({
            where: {
                id: collaborator_id,
                provider: true
            },
        });

        if (!isCollaborator) {
            return res.status(401).json({
                error: 'Colaborador não encontrado'
            })
        }

        const startHour = startOfHour(parseISO(date));

        if (isBefore(startHour, new Date())) {
            return res.status(400).json({
                error: 'Horário não disponível'
            })
        }

        const checkAvailability = await Appointment.findOne({
            where: {
                collaborator_id,
                canceled_at: null,
                date: startHour,
            }
        })

        if (checkAvailability) {
            return res.status(400).json({
                message: 'Sem horário disponível'
            })
        }

        const appointment = await Appointment.create({
            user_id: req.userID,
            collaborator_id,
            date: startHour,
        })

        return res.status(200).json(appointment);
    }
}

export default new AppointmentsController();