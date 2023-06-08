from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from .models import Salesperson, Customer, Sale, AutomobileVO
# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "id",
    ]


class SalespeopleListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id",
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "id",
        "automobile",
        "salesperson",
        "customer",

    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespeopleListEncoder(),
        "customer": CustomerListEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_salespeople(request, id=None):
    if request.method == "GET":
        if id is not None:
            salesperson = Salesperson.objects.filter(id=id)
        else:
            salesperson = Salesperson.objects.all()
            return JsonResponse(
                {"salesperson": salesperson},
                encoder=SalespeopleListEncoder,
            )
    else:
        content = json.loads(request.body)

        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespeopleListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE" ])
def api_salespeople_detail(request, id):
    if request.method == "GET":
        salesperson = Salesperson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalespeopleListEncoder,
            safe=False
        )
    else:
        request.method == "DELETE"
        count, _ = Salesperson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_customers(request, id=None):
    if request.method == "GET":
        if id is not None:
            customer = Customer.objects.filter(id=id)
        else:
            customer = Customer.objects.all()
            return JsonResponse(
                {"customer": customer},
                encoder=CustomerListEncoder,
            )
    else:
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE" ])
def api_customer_detail(request, id):
    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerListEncoder,
            safe=False
        )
    else:
        request.method == "DELETE"
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_sales(request, id=None):
    if request.method == "GET":
        if id is not None:
            sale = Sale.objects.filter(id=id)
        else:
            sale = Sale.objects.all()
            return JsonResponse(
                {"sale": sale},
                encoder=SaleListEncoder,
            )
    else:
        content = json.loads(request.body)
        employee_id = content["salesperson_id"]
        salesperson = Salesperson.objects.get(id=employee_id)
        content["salesperson"] = salesperson
        customer_id = content["customer_id"]
        customer = Customer.objects.get(id=customer_id)
        content["customer"] = customer
        automobile_vin = content["automobile"]
        automobile = AutomobileVO.objects.get(vin=automobile_vin)
        content["automobile"] = automobile
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe=False,
        )

@require_http_methods(["GET","DELETE"])
def api_sale_detail(request, id):
    if request.method == "GET":
        sale = Sale.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe=False
        )
    else:
        request.method == "DELETE"
        count, _ = Sale.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count >0})
