import * as Yup from 'yup';
import pt from 'date-fns/locale/pt-BR';

import User from '../models/User';
import Appointment from '../models/Appointments';

class AppointmentsController {
    async index(req, res) {
        return res.status(200).json({
            message: 'sem agendamento até o momento'
        })
    }

    async store(req, res) {

        const schema = Yup.object().shape({
            collaborator_id: Yup.number().required(),
            date: Yup.date().required(),
        });

        return res.status(200).json(name)
    }
}

export default new AppointmentsController();