from moods.models import Mood
from moods.models import Journal
from rest_framework import viewsets, permissions
from .serializers import MoodSerializer
from .serializers import JournalSerializer


# Mood Viewset
class MoodViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = MoodSerializer

    def get_queryset(self):
        return self.request.user.moods.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Journal View Set
class JournalViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = JournalSerializer

    def get_queryset(self):
        return self.request.user.journals.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


