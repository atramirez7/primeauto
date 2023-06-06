from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from .models import Salesperson, Customer, Sale, AutomobileVO
# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_salespeople(request, id=None):
    pass
