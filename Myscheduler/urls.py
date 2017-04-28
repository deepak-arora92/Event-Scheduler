from django.conf.urls import include, url
from Myscheduler import views
from django.contrib import admin
from .models import *

urlpatterns = [
    url(r'^$', views.list_all, name='index'),
    url(r'^createEvent$', views.create_event, name='create_event'),
    url(r'^list$', views.list_all, name='list_all'),
    url(r'^ChangeEvent$', views.change_event, name='change_event'),
    url(r'^DeleteEvent$', views.delete_event, name='delete_event'),
]