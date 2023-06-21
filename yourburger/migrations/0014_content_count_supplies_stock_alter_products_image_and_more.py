# Generated by Django 4.2.1 on 2023-06-21 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yourburger', '0013_merge_20230620_0622'),
    ]

    operations = [
        migrations.AddField(
            model_name='content',
            name='count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='supplies',
            name='stock',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.ImageField(default='', upload_to='media/'),
        ),
        migrations.AlterField(
            model_name='supplies',
            name='price',
            field=models.FloatField(default=0),
        ),
    ]
