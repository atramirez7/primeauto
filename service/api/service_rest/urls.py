from django.urls import path
from .views import api_list_technicians, api_delete_technicians, api_list_appointments, api_update_appointments

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path(
        "technicians/<int:pk>/",
        api_delete_technicians,
        name="api_delete_technicians",
        ),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path(
        "appointments/<int:pk>/", api_update_appointments,
        name="api_delete_appointments"
    ),
    path(
        "appointments/<int:pk>/cancel/",
        api_update_appointments,
        name="api_cancel_appointments"
        ),
    path(
        "appointments/<int:pk>/finish/",
        api_update_appointments,
        name="api_finish_appointments"
    ),
]
