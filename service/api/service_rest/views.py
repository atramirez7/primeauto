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
def api_list_technician(request):
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
