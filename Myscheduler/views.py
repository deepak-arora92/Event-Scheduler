from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
from models import *
import json
from datetime import datetime as dt

@csrf_exempt
def create_event(request):
	if request.POST:
		name = request.POST.get('name')
		desc = request.POST.get('description')
		location = request.POST.get('location')
		start = request.POST.get('start')
		end = request.POST.get('end')
		background = request.POST.get('background')
		allDay = request.POST.get('allDay')
		is_all_day = False if allDay == 'false' else True
		e= Events(name=name,place = location,desc=desc,start_date_time=start,end_date_time=end,background=background,is_all_day=is_all_day)
		e.save()
		context = json.dumps({'status': 200,'id':e.event_id})
		return HttpResponse(context, content_type='application/json')

@csrf_exempt
def change_event(request):
	if request.POST:
		id = request.POST.get('id')
		print "id:{0}".format(id)
		name = request.POST.get('name')
		desc = request.POST.get('description')
		location = request.POST.get('location')
		start = request.POST.get('start')
		end = request.POST.get('end')
		background = request.POST.get('background')
		allDay = request.POST.get('allDay')
		is_all_day = False if allDay == 'false' else True
		Events.objects.filter(event_id = id).update(name=name,place = location,desc=desc,start_date_time=start,end_date_time=end,background=background,is_all_day=is_all_day)
		context = json.dumps({'status': 200,'id':id})
		return HttpResponse(context, content_type='application/json')

@csrf_exempt
def delete_event(request):
	if request.POST:
		id = request.POST.get('id')
		e = Events.objects.filter(event_id=id)
		e.delete()
		context = json.dumps({'status': 200,'id':id})
		return HttpResponse(context, content_type='application/json')
	
def list_all(request):
	events = Events.objects.all()
	data=[]
	for ev in events:
		datafields = {
                'id': ev.event_id,
                'description': ev.desc,
                'location': ev.place,
                'subject': ev.name,
                'calendar': "Room 2",
                'start': ev.start_date_time.strftime('%Y-%m-%d %H:%M:%S'),
                'end': ev.end_date_time.strftime('%Y-%m-%d %H:%M:%S'),
				'background':ev.background,
				'allDay': ev.is_all_day
				}
		data.append(datafields)
	context  = {'events':json.dumps(data)}
	return render(request,'calendar.html',context)

