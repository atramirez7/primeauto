# Generated by Django 4.0.3 on 2023-06-06 17:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('sold', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('employee_id', models.CharField(max_length=50)),
            ],
            options={
                'ordering': ('first_name', 'last_name'),
            },
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField()),
                ('reason', models.CharField(max_length=400)),
                ('status', models.CharField(max_length=200)),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('customer', models.CharField(max_length=400)),
                ('vip', models.BooleanField()),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='appointments', to='service_rest.technician')),
            ],
            options={
                'ordering': ('date_time', 'vin'),
            },
        ),
    ]
