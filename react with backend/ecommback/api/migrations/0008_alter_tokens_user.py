# Generated by Django 4.2.4 on 2023-11-29 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_product_product_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tokens',
            name='user',
            field=models.CharField(max_length=200),
        ),
    ]