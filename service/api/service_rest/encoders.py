from common.json import ModelEncoder

from .models import Appointment, Technician, AutomobileVO


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "vip",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }



class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]
