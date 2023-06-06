from django.urls import path

from .api_views import (
    api_list_salespeople, api_salespeople_detail, api_list_customers, api_customer_detail
)


urlpatterns = [
path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
path("salespeople/<int:id>/", api_salespeople_detail, name="api_salespeople_detail"),
path("customers/", api_list_customers, name="api_list_customers"),
path("customers/<int:id>/", api_customer_detail, name="api_customer_detail"),



]
