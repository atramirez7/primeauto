# Generated by Django 4.0.3 on 2023-06-09 23:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0010_alter_sale_automobile_alter_sale_customer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='automobile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='automobiles', to='sales_rest.automobilevo'),
        ),
        migrations.AlterField(
            model_name='sale',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='customer', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='sale',
            name='salesperson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='salesperson', to='sales_rest.salesperson'),
        ),
    ]
