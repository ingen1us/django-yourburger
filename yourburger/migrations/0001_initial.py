# Generated by Django 4.2.1 on 2023-05-04 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('document', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=50)),
                ('lastname', models.CharField(max_length=50)),
                ('address', models.TextField(blank=True)),
                ('phone', models.CharField(max_length=10)),
                ('date', models.DateField(auto_now_add=True)),
                ('status', models.BooleanField(default=True)),
            ],
        ),
    ]
