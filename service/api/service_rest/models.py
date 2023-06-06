from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    vin =
    sold = 

class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        ordering = ("first_name", "last_name")
