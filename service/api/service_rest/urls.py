from django.urls import path
from .views import api_list_technicians, api_delete_technicians

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path(
        "technicians/<int:pk>/",
        api_delete_technicians,
        name="api_delete_technicians",
    ),
]
