from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Mood
from .serializers import MoodSerializer

#notes: evq to leads/api.py

# Create your views here.
class ListMood(generics.ListCreateAPIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    queryset = Mood.objects.all() # query that grabs all the Moods
    serializer_class = MoodSerializer


class DetailMood(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mood.objects.all()
    serializer_class = MoodSerializer

