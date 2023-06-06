from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from .models import Technician, Appointment, AutomobileVO
from .encoders import (
    AutomobileVOEncoder,
    TechnicianEncoder,
    AppointmentEncoder,
)
# Create your views here.

@require_http_methods(["POST", "GET"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()

        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False
        )

    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )

@require_http_methods(["DELETE"])
def api_delete_technicians(request, pk):
    try:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

    except Technician.DoesNotExist:
        return JsonResponse({"message": "Does not exist"})

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
                {"appoinments": appointments},
                encoder=AppointmentEncoder,
            )

    else:
        try:
            content = json.loads(request.body)
            technician_id = content["technician_id"]
            technician = Technician.objects.get(pk=technician_id)
            content["technician"] = technician
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )

        except:
            response = JsonResponse(
                {"message": "Could not create the appointment"}
            )
            response.status_code = 400
            return response
