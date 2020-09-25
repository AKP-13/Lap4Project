from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Mood
from .serializers import MoodSerializer

class ListMood(generics.ListCreateAPIView):
    queryset = Mood.objects.all()
    serializer_class = MoodSerializer


class DetailMood(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mood.objects.all()
    serializer_class = MoodSerializer

