from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializers
from .models import Room

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializers
    