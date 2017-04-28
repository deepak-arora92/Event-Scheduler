from __future__ import unicode_literals
from django.db import models

class EventType(models.Model):
	event_type_id =  models.AutoField(primary_key = True)
	event_type = models.CharField(max_length=20)
	
class Events(models.Model):
	event_id = models.AutoField(primary_key = True)
	event_type = models.ForeignKey(EventType, on_delete=models.CASCADE,default=1)
	name = models.CharField(max_length=50)
	place = models.CharField(max_length=50)
	desc = models.CharField(max_length=200)
	start_date_time =  models.DateTimeField()
	end_date_time = models.DateTimeField()
	background = models.CharField(max_length=200, default = 'rgba(00, 80, FF, 0.8)')
	is_all_day = models.BooleanField(default=0)

