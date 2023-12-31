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

    else:  #POST
        try:
            content = json.loads(request.body)

            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )

        except:
            response = JsonResponse({"message": "Could not create technician"})
            response.status_code = 400
            return response


@require_http_methods(["DELETE"])
def api_delete_technicians(request, pk):
    try:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

    except Technician.DoesNotExist:
        response = JsonResponse({"message": "Cannot delete. Technican cannot be found"})
        response.status_code = 404
        return response


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
                {"appointments": appointments},
                encoder=AppointmentEncoder,
            )

    else:
        try:
            content = json.loads(request.body)
            technician_id = content["technician_id"]
            technician = Technician.objects.get(pk=technician_id)
            content["technician"] = technician
            vin_auto = content["vin"]
            if AutomobileVO.objects.filter(vin=vin_auto).exists():
                content["vip"] = True

            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )

        except:
            response = JsonResponse(
                {"message": "Could not create appointment"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "PUT"])
def api_update_appointments(request, pk):
    if request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)
        status = content.get("status")

        if status == "canceled":
            Appointment.objects.filter(id=pk).update(status="Canceled")
        elif status == "finished":
            Appointment.objects.filter(id=pk).update(status="Finished")
        else:
            return JsonResponse({"message": "Invalid status"}, status=400)

        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
